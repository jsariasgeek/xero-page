from django.contrib import admin
from .models import Usuario, Mensaje

# Register your models here.

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
	pass

@admin.register(Mensaje)
class MensajeAdmin(admin.ModelAdmin):
	pass
