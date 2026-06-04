---
title: Folder.Contents
---

# Folder.Contents


Vrátí tabulku obsahující vlastnosti a obsah souborů a složek nalezených v určené složce.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku obsahující řádek pro každou složku a soubor nalezený ve složce `path`. Každý řádek obsahuje vlastnosti složky nebo souboru a odkaz na jeho obsah. Parametr `options` je aktuálně určen pouze pro interní použití.



## Category
Accessing data
