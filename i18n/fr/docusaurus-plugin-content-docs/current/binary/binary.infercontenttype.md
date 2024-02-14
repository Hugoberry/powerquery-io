---
title: Binary.InferContentType
---

# Binary.InferContentType


Lit le flux binaire et essaie de déterminer le type de contenu et les informations de format du flux.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Remarks

Retourne un enregistrement avec le champ Content.Type qui contient le type MIME déduit.     Si le type de contenu déduit est text/\* et qu'une page de codes pour encodage est détectée, le champ Content.Encoding contenant l'encodage du flux est également retourné.    Si le type de contenu déduit est text/csv et que le format est délimité, le champ Csv.PotentialDelimiter contenant une table destinée à l'analyse des délimiteurs potentiels est également retourné.    Si le type de contenu déduit est text/csv et que le format a une largeur fixe, le champ Csv.PotentialPositions contenant une liste destinée à l'analyse des positions de colonnes à largeur fixe potentielles est également retourné.



## Category
Binary
