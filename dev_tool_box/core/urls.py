from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),  # Página inicial
    path('substituir_palavra/', views.substituir_palavra, name='substituir_palavra'),
    path('contador_caracteres/', views.contador_caracteres, name='contador_caracteres'),
    path('frequencia_palavras/', views.frequencia_palavras, name='frequencia_palavras'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    