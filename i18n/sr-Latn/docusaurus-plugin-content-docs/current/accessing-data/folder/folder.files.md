---
title: Folder.Files
---

# Folder.Files


Vraća tabelu koja obuhvata svojstva i sadržaj datoteka pronađenih u navedenoj fascikli i potfasciklama.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Vraća tabelu koja sadrži red za svaku datoteku pronađenu u navedenoj fascikli i svim njenim potfasciklama.

-   `path`: Putanja do fascikle iz koje želite da preuzmete datoteke. Navedena putanja fascikle mora da bude važeća puna putanja.
-   `options`: (Opcionalno) Ovaj parametar je trenutno namenjen samo za internu upotrebu.

Svaki red vraćene tabele sadrži svojstva datoteke i vezu ka njenom sadržaju.


## Examples

### Example #1
Vratite tabelu koja sadrži sve datoteke pronađene u C:\\test-examples\\example-folder i svim njenim podfasciklama.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
