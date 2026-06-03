---
title: Folder.Files
---

# Folder.Files


Returnerer en tabel, der indeholder egenskaberne for og indholdet i de filer, der blev fundet i den angivne mappe og de angivne undermapper.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel, der indeholder en række for hver fil, der blev fundet i den angivne mappe og alle dens undermapper.

-   `path`: Stien til den mappe, du vil hente filerne fra. Den angivne sti til mappen skal være en gyldig absolut sti.
-   `options`: (Valgfrit) Denne parameter er i øjeblikket kun beregnet til intern brug.

Hver række i den returnerede tabel indeholder egenskaber for filen og et link til dens indhold.


## Examples

### Example #1
Returner en tabel, der indeholder alle de filer, der blev fundet i mappen C:\\test-examples\\example-folder og alle dens undermapper.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
