---
title: HdInsight.Files
---

# HdInsight.Files


Vráti tabuľku obsahujúcu vlastnosti a obsah objektov BLOB nachádzajúcich sa v zadanom kontajneri z trezora ukladacieho priestoru platformy Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Vráti tabuľku obsahujúcu riadok pre každý súbor objektu BLOB nachádzajúci sa na URL adrese kontajnera, `account`, z trezora ukladacieho priestoru platformy Azure. Každý riadok obsahuje vlastnosti súboru a prepojenie na jeho obsah.



## Category
Accessing data
