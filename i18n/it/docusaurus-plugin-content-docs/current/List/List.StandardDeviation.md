---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Restituisce una stima della deviazione standard sulla base di un campione.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Restituisce una stima sulla base di un campione della deviazione standard dei valori nell'elenco <code>numbersList</code>.    Se <code>numbersList</code> è un elenco di numeri, viene restituito un numero.    Viene generata un'eccezione per un elenco vuoto o un elenco di elementi che non sono di tipo <code>number</code>.


## Examples

### Example #1 
Trovare la deviazione standard dei numeri da 1 a 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
