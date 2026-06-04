---
title: Folder.Files
---

# Folder.Files


Vráti tabuľku obsahujúcu vlastnosti a obsah súborov nachádzajúcich sa v zadanom priečinku a podpriečinkoch.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku obsahujúcu riadok pre každý súbor nájdený v zadanom priečinku a všetkých jeho podpriečinkoch.

-   `path`: Cesta k priečinku, z ktorému chcete načítať súbory. Zadaná cesta k priečinku musí byť platnou absolútnou cestou.
-   `options`: (Voliteľné) Tento parameter je momentálne určený len na interné použitie.

Každý riadok vrátenej tabuľky obsahuje vlastnosti súboru a prepojenie na jeho obsah.


## Examples

### Example #1
Vráti tabuľku obsahujúcu všetky súbory nájdené v priečinku C:\\test-examples\\example-folder a vo všetkých jeho podpriečinkoch.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
