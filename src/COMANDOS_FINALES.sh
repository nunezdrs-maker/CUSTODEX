#!/bin/bash
# ✅ DEPLOY RÁPIDO DE CUSTODEX ASESORES

echo "🚀 Preparando deploy..."

# Renombrar Dockerfile.build a Dockerfile
if [ -f "Dockerfile.build" ]; then
    mv Dockerfile.build Dockerfile
    echo "✅ Dockerfile renombrado correctamente"
else
    echo "❌ ERROR: Dockerfile.build no encontrado"
    exit 1
fi

# Verificar
if [ -f "Dockerfile" ]; then
    echo "✅ Dockerfile listo"
    echo ""
    head -n 2 Dockerfile
    echo ""
else
    echo "❌ ERROR: Dockerfile no se creó correctamente"
    exit 1
fi

# Deploy
echo "🚀 Iniciando deploy..."
fly deploy
