---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Retourne un tableau avec les données d&#39;un point de terminaison MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Appelle l'API MailChimp et retourne le jeu de données résultant sous forme de tableau. Parcourt automatiquement les pages de tous les résultats. Le paramètre entityName facultatif peut être utilisé pour les points de terminaison d'API où le point de terminaison racine et le paramètre entityName principal dans la réponse JSON ne correspondent pas.


## Examples

### Example #1 
Extrait un tableau de données du point de terminaison des listes de l&#39;API MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Tableau avec des données de liste.
```


### Example #2 
Extrait un tableau de données du point de terminaison des dossiers de campagne de l&#39;API MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Tableau avec des données de dossiers de campagne.
```



