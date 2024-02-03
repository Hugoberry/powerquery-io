---
title: Value.FromText
---

# Value.FromText


## Description

Tiek izveidota stingri tipēta vērtība no teksta atveidojuma.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Tiek dekodēta vērtība no teksta atveidojuma <code>text</code>, un tā tiek interpretēta kā vērtība ar atbilstošu tipu.    <code>Value.FromText</code> izmanto teksta vērtību un atgriež skaitli, loģisku vērtību, Null vērtību, datetime vērtību, ilguma vērtību vai teksta vērtību. Tukša teksta vērtība tiek interpretēta kā Null vērtība.    Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").



## Category
Text.Conversions from and to text
