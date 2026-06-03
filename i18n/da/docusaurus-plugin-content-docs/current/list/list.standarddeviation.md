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

Returnerer et estimat, der er baseret på et eksempel, af værdierne på listen `numbersList`. Hvis `numbersList` er en liste over tal, returneres der et tal. Der udløses en fejl for en tom liste eller en liste med elementer, der ikke er af typen `number`.


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
