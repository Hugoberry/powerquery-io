---
title: List.Median
---

# List.Median


## Description

Tiek atgriezta saraksta mediānas vērtība.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Atgriež vidējo saraksta <code>list</code> vienumu. Ja sarakstā nav iekļautas vērtības, kas nav <code>Null</code>, šī funkcija atgriež vērtību <code>Null</code>.    Ja vienumu skaits ir pāra skaitlis, funkcija no diviem vidējiem vienumiem izvēlas to, kuram ir mazāka vērtība, ja vien visi sarakstā    iekļautie vienumi nav datums/laiks, ilgums, skaitļi vai laiks. Tādā gadījumā tiek atgriezta divu vienumu vidējā vērtība.


## Examples

### Example #1 
Iegūstiet saraksta &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; mediānas vienumu.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
