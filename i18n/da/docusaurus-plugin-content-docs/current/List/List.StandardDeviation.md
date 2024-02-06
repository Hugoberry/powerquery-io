---
title: List.StandardDeviation
---

# List.StandardDeviation


Returnerer et estimat, der er baseret på et eksempel, af standardafvigelsen.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Returnerer et estimat, der er baseret på et eksempel, af værdierne på listen <code>numbersList</code>.    Hvis <code>numbersList</code> er en liste over tal, returneres der et tal.     Der udløses en undtagelse for en tom liste eller for en liste over elementer, der ikke er af typen <code>number</code>.


## Examples

### Example #1 
Find standardafvigelsen for tallene 1-5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
