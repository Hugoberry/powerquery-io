---
title: List.StandardDeviation
---

# List.StandardDeviation


Vrátí odhad směrodatné odchylky založený na vzorku.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Vrátí odhad směrodatné odchylky hodnot v seznamu `numbersList` založený na vzorku. Pokud je `numbersList` seznam čísel, vrátí se číslo. Pokud se předá prázdný seznam nebo seznam položek, který není typu `number`, vyvolá se chyba.


## Examples

### Example #1
Určí směrodatnou odchylku čísel od 1 do 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
