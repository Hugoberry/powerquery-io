---
title: List.Median
---

# List.Median


Pateikiama sąrašo medianos reikšmė.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Pateikiamas sąrašo `list` medianos elementas. Ši funkcija pateikia `null`, jei sąraše nėra ne `null` reikšmių. Jei elementų skaičius yra lyginis, funkcija iš dviejų medianos elementų pasirenka mažesnįjį, išskyrus atvejus, kai sąrašą sudaro vien datos, trukmės, skaičiai arba kartai, tokiu atveju ji pateikia dviejų elementų vidurkį.


## Examples

### Example #1
Raskite medianą sąraše `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
