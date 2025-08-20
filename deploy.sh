#!/bin/bash
# Script para automatizar el despliegue en GitHub Pages usuario.github.io

npm run build
cp -r dist/* .
git add .
git commit -m "Deploy a GitHub Pages"
git push

echo "¡Despliegue completado! Revisa https://atelieranagomes.github.io/ en unos minutos."
