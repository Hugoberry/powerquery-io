---
title: Folder.Contents
---

# Folder.Contents


## Description

Vráti tabuľku obsahujúcu vlastnosti a obsah súborov a priečinkov nachádzajúcich sa v zadanom priečinku.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku obsahujúcu riadok pre každý priečinok a súbor nachádzajúci sa v priečinku <code>path</code>. Každý riadok obsahuje vlastnosti príslušného priečinka alebo súboru a prepojenie na jeho obsah. Parameter <code>options</code> je momentálne určený len na interné použitie.



## Category
Accessing data
