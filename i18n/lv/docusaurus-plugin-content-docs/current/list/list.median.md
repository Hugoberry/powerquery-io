---
title: List.Median
---

# List.Median


Tiek atgriezta saraksta mediānas vērtība.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Atgriež vidējo saraksta `list` vienumu. Ja sarakstā nav iekļautas vērtības, kas nav `Null`, šī funkcija atgriež vērtību `Null`. Ja vienumu skaits ir pāra skaitlis, funkcija no diviem vidējiem vienumiem izvēlas to, kuram ir mazāka vērtība, ja vien visi sarakstā iekļautie vienumi nav datums/laiks, ilgums, skaitļi vai laiks. Tādā gadījumā tiek atgriezta divu vienumu vidējā vērtība.


## Examples

### Example #1
Iegūstiet saraksta `{5, 3, 1, 7, 9}` mediānas vienumu.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
