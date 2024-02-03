---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Vráti odhad štandardnej odchýlky na základe vzorky.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Vráti odhad štandardnej odchýlky na základe vzorky od hodnôt v zozname <code>numbersList</code>.    Ak zoznam <code>numbersList</code> je zoznamom čísel, vráti sa číslo.    V prázdnom zozname alebo v zozname položiek, ktoré nie sú typu <code>number</code>, dôjde k výnimke.


## Examples

### Example #1 
Nájdite štandardnú odchýlku čísel 1 až 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
