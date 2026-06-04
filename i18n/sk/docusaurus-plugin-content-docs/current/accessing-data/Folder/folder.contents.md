---
title: Folder.Contents
---

# Folder.Contents


Vráti tabuľku obsahujúcu vlastnosti a obsah súborov a priečinkov nachádzajúcich sa v zadanom priečinku.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku obsahujúcu riadok pre každý priečinok a súbor nachádzajúci sa v priečinku `path`. Každý riadok obsahuje vlastnosti príslušného priečinka alebo súboru a prepojenie na jeho obsah. Parameter `options` je momentálne určený len na interné použitie.



## Category
Accessing data
