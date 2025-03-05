import os

IGNORED_DIRS = {"__pycache__", "migrations", "venv", "env", "staticfiles", ".git", ".idea"}

def list_project_structure(startpath):
    for root, dirs, files in os.walk(startpath, topdown=True):
        # Filtrar diretórios ignorados
        dirs[:] = [d for d in dirs if d not in IGNORED_DIRS]

        level = root.replace(startpath, "").count(os.sep)
        indent = " " * 4 * level
        print(f"{indent}📁 {os.path.basename(root)}/")
        
        subindent = " " * 4 * (level + 1)
        for file in files:
            print(f"{subindent}📄 {file}")

# 🔍 Substitua pelo caminho do seu projeto Django
start_directory = "./"  # ou caminho absoluto

list_project_structure(start_directory)
