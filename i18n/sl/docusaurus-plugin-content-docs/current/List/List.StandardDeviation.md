---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Vrne oceno standardnega odklona glede na vzorec.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Vrne oceno standardnega odklona vrednosti na seznamu <code>numbersList</code> glede na vzorec.    Če je <code>numbersList</code> seznam števil, je vrnjeno število.    Če je seznam prazen ali vsebuje elemente, ki niso vrste <code>number</code>, pride do izjeme.


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
