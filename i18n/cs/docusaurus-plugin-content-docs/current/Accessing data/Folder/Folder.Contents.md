---
title: Folder.Contents
---

# Folder.Contents


## Description

Vrátí tabulku obsahující vlastnosti a obsah souborů a složek nalezených v určené složce.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Vrátí tabulku obsahující řádek pro každou složku a soubor nalezený ve složce <code>path</code>. Každý řádek obsahuje vlastnosti složky nebo souboru a odkaz na jeho obsah. Parametr <code>options</code> je aktuálně určen pouze pro interní použití.



## Category
Accessing data
