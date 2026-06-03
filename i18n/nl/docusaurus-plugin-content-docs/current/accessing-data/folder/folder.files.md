---
title: Folder.Files
---

# Folder.Files


Retourneert een tabel die de eigenschappen en inhoud bevat van de bestanden die in de opgegeven map en submappen zijn te vinden.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Retourneert een tabel met een rij voor elk bestand in de opgegeven map en alle bijbehorende submappen.

-   `path`: het pad naar de map waaruit je de bestanden wilt ophalen. Het opgegeven mappad moet een geldig absoluut pad zijn.
-   `options`: (optioneel) Deze parameter is momenteel alleen bedoeld voor intern gebruik.

Elke rij van de geretourneerde tabel bevat eigenschappen van het bestand en een koppeling naar de inhoud ervan.


## Examples

### Example #1
Geef een tabel weer met alle bestanden die zijn gevonden in C:\\test-voorbeelden\\voorbeeldmap en alle submappen.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
