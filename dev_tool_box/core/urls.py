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
    path('remover_espacos/', views.remover_espacos, name='remover_espacos'),
    path('remover_acentos/', views.remover_acentos, name='remover_acentos'),
    path('remover_pontuacao/', views.remover_pontuacao, name='remover_pontuacao'),
    path('remover_quebras/', views.remover_quebras, name='remover_quebras'),
    path('remover_texto_entre_caracteres/', views.remover_texto_entre_caracteres, name='remover_texto_entre_caracteres'),
    path('leitura_dinamica/', views.leitura_dinamica, name='leitura_dinamica'),
    path('similaridade_textos/', views.similaridade_textos, name='similaridade_textos'),

    path('calculadoras/sporcentagem/', views.porcentagem, name='porcentagem'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    