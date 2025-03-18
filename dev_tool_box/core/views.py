from django.shortcuts import render

def home(request):
    return render(request, "core/base.html")

# def substituir_palavra(request):
#     if request.headers.get('X-Requested-With') == 'XMLHttpRequest':  # Verifica AJAX
#         return render(request, "core/substituir_palavra.html")  # Só o conteúdo
#     return render(request, "core/base.html")  # Página completa se for acesso normal

def substituir_palavra(request):
    return render(request, 'core/texto/substituir_palavra.html')

def contador_caracteres(request):
    return render(request, "core/texto/contador_caracteres.html")

def frequencia_palavras(request):
    return render(request, "core/texto/frequencia_palavras.html")

def inverter_texto(request):
    return render(request, "core/texto/inverter_texto.html")

def revirar_texto(request):
    return render(request, "core/texto/revirar_texto.html")

def converter_texto(request):
    return render(request, "core/texto/converter_texto.html")

def remover_espacos(request):
    return render(request, "core/texto/remover_espacos.html")

def remover_acentos(request):
    return render(request, "core/texto/remover_acentos.html")

def remover_pontuacao(request):
    return render(request, "core/texto/remover_pontuacao.html")

def remover_quebras(request):
    return render(request, "core/texto/remover_quebras.html")

def remover_texto_entre_caracteres(request):
    return render(request, "core/texto/remover_texto_entre_caracteres.html")

def leitura_dinamica(request):
    return render(request, "core/texto/leitura_dinamica.html")

def similaridade_textos(request):
    return render(request, "core/texto/similaridade_textos.html")

def porcentagem(request):
    return render(request, "core/calculadoras/porcentagem.html")

def regra_de_tres(request):
    return render(request, "core/calculadoras/regra_de_tres.html")
    
