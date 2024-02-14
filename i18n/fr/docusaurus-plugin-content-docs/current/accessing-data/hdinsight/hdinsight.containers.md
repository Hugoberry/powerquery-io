---
title: HdInsight.Containers
---

# HdInsight.Containers


Retourne une table de navigation contenant les conteneurs trouvés dans le compte spécifié à partir d&#39;un coffre de stockage Azure.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Remarks

Retourne une table de navigation contenant une ligne pour chaque conteneur trouvé pour l'URL du compte, <code>account</code>, à partir d'un coffre de stockage Azure. Chaque ligne contient un lien vers les objets blob du conteneur.



## Category
Accessing data
