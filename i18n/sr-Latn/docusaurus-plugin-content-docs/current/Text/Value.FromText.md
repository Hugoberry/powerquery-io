---
title: Value.FromText
---

# Value.FromText


## Description

Kreira vrednost podudarnog tipa od tekstualne reprezentacije.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Dekodira vrednost iz tekstualne reprezentacije, <code>text</code>, i tumači je kao vrednost odgovarajućeg tipa.    <code>Value.FromText</code> uzima tekstualnu vrednost i vraća broj, logičku vrednost, stavku bez vrednosti, vrednost datuma i vremena, vrednost trajanja ili tekstualnu vrednost. Prazna tekstualna vrednost se tumači kao stavka bez vrednosti.    Može se navesti i opcionalan <code>culture</code> (na primer, „en-US“).



## Category
Text.Conversions from and to text
