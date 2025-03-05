from django.shortcuts import render

def home(request):
    return render(request, "core/base.html")

# def substituir_palavra(request):
#     if request.headers.get('X-Requested-With') == 'XMLHttpRequest':  # Verifica AJAX
#         return render(request, "core/substituir_palavra.html")  # Só o conteúdo
#     return render(request, "core/base.html")  # Página completa se for acesso normal

def substituir_palavra(request):
    return render(request, 'core/substituir_palavra.html')

def contador_caracteres(request):
    return render(request, "core/contador_caracteres.html")

def frequencia_palavras(request):
    return render(request, "core/frequencia_palavras.html")
