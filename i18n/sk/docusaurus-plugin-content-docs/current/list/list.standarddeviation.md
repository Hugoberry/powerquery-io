---
title: List.StandardDeviation
---

# List.StandardDeviation


Vráti odhad štandardnej odchýlky na základe vzorky.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Vráti odhad štandardnej odchýlky na základe vzorky od hodnôt v zozname `numbersList`. Ak zoznam `numbersList` je zoznamom čísel, vráti sa číslo. V prázdnom zozname alebo zozname položiek, ktoré nie sú typu `number` sa vyskytne chyba.


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
