---
title: Folder.Files
---

# Folder.Files


## Description

Vráti tabuľku obsahujúcu vlastnosti a obsah súborov nachádzajúcich sa v zadanom priečinku a podpriečinkoch.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku obsahujúcu riadok pre každý súbor nachádzajúci sa v priečinku <code>path</code> a všetkých jeho podpriečinkoch. Každý riadok obsahuje vlastnosti príslušného súboru a prepojenie na jeho obsah. Parameter <code>options</code> je momentálne určený len na interné použitie.



## Category
Accessing data
