from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),  # Página inicial
    path('substituir_palavra/', views.substituir_palavra, name='substituir_palavra'),
    path('contador_caracteres/', views.contador_caracteres, name='contador_caracteres'),
    path('frequencia_palavras/', views.frequencia_palavras, name='frequencia_palavras'),
    path('inverter_texto/', views.inverter_texto, name='inverter_texto'),
    path('revirar_texto/', views.revirar_texto, name='revirar_texto'),
    path('converter_texto/', views.converter_texto, name='converter_texto'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    