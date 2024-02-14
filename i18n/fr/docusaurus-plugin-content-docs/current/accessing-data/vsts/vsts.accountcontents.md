---
title: VSTS.AccountContents
---

# VSTS.AccountContents


Entrez l&#39;URL de votre service Azure DevOps Analytics.


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Retourne le contenu téléchargé à partir de l'URL du service Azure DevOps Analytics sous forme de valeur binaire. Cette fonction utilise des informations d'identification différentes pour chaque organisation.


