---
title: Folder.Files
---

# Folder.Files


## Description

Vrátí tabulku obsahující vlastnosti a obsah souborů a složek nalezených v zadané složce a jejích podsložkách.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Vrátí tabulku obsahující řádek pro každý soubor nalezený ve složce <code>path</code> a všech jejích podsložkách. Každý řádek obsahuje vlastnosti souboru a odkaz na jeho obsah. Parametr <code>options</code> je aktuálně určen pouze pro interní použití.



## Category
Accessing data
