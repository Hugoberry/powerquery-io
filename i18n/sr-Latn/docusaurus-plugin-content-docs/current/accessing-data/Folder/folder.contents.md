---
title: Folder.Contents
---

# Folder.Contents


Vraća tabelu koja sadrži svojstva i sadržaj datoteka i fascikli pronađenih u navedenoj fascikli.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Vraća tabelu koja sadrži red za svaku fasciklu i datoteku pronađenu u fascikli `path`. Svaki red sadrži svojstva fascikle ili datoteke i vezu do njenog sadržaja. Parametar `options` je trenutno namenjen samo za internu upotrebu.



## Category
Accessing data
