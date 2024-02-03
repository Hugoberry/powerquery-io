---
title: Folder.Files
---

# Folder.Files


## Description

Vraća tabelu koja obuhvata svojstva i sadržaj datoteka pronađenih u navedenoj fascikli i potfasciklama.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Vraća tabelu koja sadrži red za svaku datoteku pronađenu u fascikli <code>path</code> i svim njenim potfasciklama. Svaki red sadrži svojstva datoteke i vezu do njenog sadržaja. Parametar <code>options</code> je trenutno namenjen samo za internu upotrebu.



## Category
Accessing data
