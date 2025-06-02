# Test Technique React - Visualiseur de Modèles 3D

## 📋 Objectif

Développer une application React affichant une liste de modèles 3D en utilisant l'API fournie et en respectant la maquette.

**Durée :** 15 minutes

## 🔗 Ressources

- **Maquette Figma :** [Voir la maquette](https://www.figma.com/design/WLArnARGwEk6FZrVzsDwZe/Untitled?node-id=0-1&p=f&t=2ae4k3Sj16MwbqUa-0)
- **API Endpoint :** `https://inov-test-api.onrender.com/`
- **Documentation API :** [Consulter la documentation](https://inov-test-api.onrender.com/docs/)

## 🎯 Fonctionnalités à implémenter

1. **Récupération des données** via l'API REST
2. **Affichage en liste** des modèles 3D
3. **Intégration de la maquette** fournie

### Structure des données API

```json
[
  {
    "modelName": "string",
    "polygons": 0,
    "author": "string",
    "date": "string",
    "description": "string",
    "name": "string",
    "id": "string"
  }
]
```

## 🚀 Installation et lancement

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 📝 Notes

- Il n'est pas nécessaire de terminer l'exercice complet
- L'objectif est d'échanger sur votre approche pendant le développement
- Priorisez la fonctionnalité avant le styling si le temps est limité
