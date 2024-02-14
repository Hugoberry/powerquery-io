---
title: HdInsight.Files
---

# HdInsight.Files


Retourne une table contenant les propriétés et le contenu des objets blob trouvés dans le conteneur indiqué à partir d&#39;un coffre de stockage Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Retourne une table contenant une ligne pour chaque fichier d'objets blob trouvé à l'URL de conteneur, <code>account</code>, à partir d'un coffre de stockage Azure. Chaque ligne contient les propriétés du fichier et un lien vers son contenu.



## Category
Accessing data
