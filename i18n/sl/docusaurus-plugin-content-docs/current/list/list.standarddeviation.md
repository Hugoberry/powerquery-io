---
title: List.StandardDeviation
---

# List.StandardDeviation


Vrne oceno standardnega odklona glede na vzorec.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Vrne oceno standardnega odklona vrednosti na seznamu `numbersList` glede na vzorec. Če je `numbersList` seznam števil, je vrnjeno število. Če je seznam prazen ali pa vsebuje elemente, ki niso vrste `number`, pride do napake.


## Examples

### Example #1
Poiščite standardni odklon števil od 1 do 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
