---
title: Pdf.Tables
---

# Pdf.Tables


Retourne les tables trouvées dans un fichier PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Retourne les tables trouvées dans `pdf`. Vous pouvez indiquer un paramètre d'enregistrement facultatif, `options`, pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `Implementation` : Version de l’algorithme à utiliser lors de l’identification des tables. Les anciennes versions sont disponibles uniquement à des fins de compatibilité descendante afin d’empêcher les anciennes requêtes d’être interrompues par les mises à jour d’algorithme. La version la plus récente doit toujours donner les meilleurs résultats. Les valeurs valides sont « 1.3 », « 1.2 », « 1.1 » ou null.
-   `StartPage` : Spécifie la première page de la plage de pages à examiner. Valeur par défaut : 1.
-   `EndPage` : Spécifie la dernière page dans la plage de pages à examiner. Valeur par défaut : dernière page du document.
-   `MultiPageTables` : Détermine si des tables similaires sur des pages consécutives sont automatiquement regroupées en une seule table. Valeur par défaut : true.
-   `EnforceBorderLines` : Détermine si des bordures sont toujours appliquées comme limites de cellule (quand la valeur est true), ou simplement utilisées comme un indicateur parmi d'autres pour déterminer les limites de cellule (quand la valeur est false). Valeur par défaut : false.


## Examples

### Example #1
Retourne les tables contenues dans sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Accès aux données
