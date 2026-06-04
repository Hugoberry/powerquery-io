---
title: HdInsight.Containers
---

# HdInsight.Containers


Vráti navigačnú tabuľku obsahujúcu kontajnery nachádzajúce sa v zadanom konte z trezora ukladacieho priestoru platformy Azure.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Remarks

Vráti navigačnú tabuľku obsahujúcu riadok pre každý kontajner nachádzajúci sa na URL adrese konta, `account`, z trezora ukladacieho priestoru platformy Azure. Každý riadok obsahuje prepojenie na objekty BLOB kontajnera.



## Category
Accessing data
