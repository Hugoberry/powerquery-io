---
title: List.Median
---

# List.Median


## Description

Pateikiama sąrašo medianos reikšmė.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Pateikiamas sąrašo <code>list</code> medianos elementas. Ši funkcija pateikia <code>null</code>, jei sąraše nėra ne <code>null</code> reikšmių.    Jei elementų skaičius yra lyginis, funkcija iš dviejų medianos elementų pasirenka mažesnįjį, išskyrus atvejus, kai sąrašą    sudaro vien datos, trukmės, skaičiai arba kartai, tokiu atveju ji pateikia dviejų elementų vidurkį.


## Examples

### Example #1 
Raskite medianą sąraše &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
