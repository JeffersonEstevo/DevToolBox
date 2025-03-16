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

def inverter_texto(request):
    return render(request, "core/inverter_texto.html")

def revirar_texto(request):
    return render(request, "core/revirar_texto.html")

def converter_texto(request):
    return render(request, "core/converter_texto.html")

def remover_espacos(request):
    return render(request, "core/remover_espacos.html")

def remover_acentos(request):
    return render(request, "core/remover_acentos.html")

def remover_pontuacao(request):
    return render(request, "core/remover_pontuacao.html")