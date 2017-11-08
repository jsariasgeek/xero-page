# -*- encoding: utf-8 -*-

from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from django.template import RequestContext
from django.core.mail import EmailMessage
from django.db import IntegrityError
from django.shortcuts import redirect

from website.models import *
from website.forms import *


def home(request):
	form = FormularioContacto()
	proyectoDesorder = Proyecto.objects.all()
	proyecto = proyectoDesorder.order_by('-fecha_registro')

	context = {
		'form':form, 
		'proyecto':proyecto,

	}

	return render(request, 'newsite/index.html',  context)

def contacto(request):
	if request.method == 'POST': # Si el formulario es enviado
		form = FormularioContacto(request.POST)		
		if form.is_valid(): # Si es válido se procesan los datos

			nombre = request.POST.get('nombre')
			apellidos = request.POST.get('apellidos')
			email = request.POST.get('email')
			celular = request.POST.get('celular')
			mensajeUsuario = request.POST.get('mensaje')
			print(nombre,apellidos,email)

			subject = 'Te han dejado un mensaje en la web'
			message = nombre + ' ' + apellidos + ' con el email ' + email + ' y celular ' + celular + ' te ha dejado el siguiente mensaje en la web:  ' + mensajeUsuario
			# Enviamos el mensaje
			mail = EmailMessage(subject, message, to=['jsarias0514@gmail.com'])
			mail.send()

			# Guardamos los datos del usuario
			userMessage = Usuario()
			userMessage.nombres = form.cleaned_data['nombre']
			userMessage.apellidos = form.cleaned_data['apellidos']
			userMessage.email = form.cleaned_data['email']
			userMessage.celular = form.cleaned_data['celular']

			
			#Guardamos el Mensaje

			# Guardamos el usuario
			try:
				userMessage.save()
				userMessage.mensaje_set.create(mensaje=mensajeUsuario)
				print('Guarde el Usuario y El mensaje')
				# return redirect('/mensajeenviado')
				return HttpResponse("Tu mensaje se ha enviado correctamente. Pronto te contactaremos.")

			except IntegrityError:
				# confirmamos el envío del mensaje			
				UserHistorico = Usuario.objects.get(email=email)
				messageUser = Mensaje()
				messageUser.usuario = UserHistorico
				messageUser.mensaje = mensajeUsuario
				messageUser.save()
				print('Guarde el Mensaje')
				return HttpResponse("Tu mensaje se ha enviado correctamente. Pronto te contactaremos.")
		
			return HttpResponse("Tu mensaje se ha enviado correctamente. Pronto te contactaremos.")

		else:
			return HttpResponse('Se ha Presentado un Error')
			
	else:
		return redirect('/')
