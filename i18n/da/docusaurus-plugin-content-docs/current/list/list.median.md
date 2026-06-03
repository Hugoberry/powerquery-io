---
title: List.Median
---

# List.Median


Returnerer medianværdien på listen.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Returnerer medianelementet på listen `list`. Denne funktion returnerer `null`, hvis listen ikke indeholder værdier, som ikke er `null`. Hvis der er et lige antal elementer, vælger funktionen det mindste af de to medianelementer, medmindre listen udelukkende består af dato/klokkeslæt, varigheder, tal eller klokkeslæt, i hvilket tilfælde den returnerer gennemsnittet af de to elementer.


## Examples

### Example #1
Find medianelementet på listen `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
