---
title: AzureDevOpsServer.AccountContents
---

# AzureDevOpsServer.AccountContents


Entrez l'URL de votre service Azure DevOps Analytics.


## Syntax

```powerquery
AzureDevOpsServer.AccountContents(
    url as text,
    optional options as record
) as table
```


## Remarks

Retourne le contenu téléchargé à partir de l'URL du service Azure DevOps Analytics sous forme de valeur binaire. Cette fonction utilise des informations d'identification différentes pour chaque organisation.


