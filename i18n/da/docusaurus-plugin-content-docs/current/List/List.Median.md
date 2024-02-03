---
title: List.Median
---

# List.Median


## Description

Returnerer medianværdien på listen.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Returnerer medianelementet på listen <code>list</code>. Denne funktion returnerer <code>null</code>, hvis listen ikke indeholder værdier, som ikke er <code>null</code>.     Hvis der er et lige antal elementer, vælger funktionen det mindste af de to medianelementer, medmindre listen    udelukkende består af dato/klokkeslæt, varigheder, tal eller klokkeslæt, i hvilket tilfælde den returnerer gennemsnittet af de to elementer.


## Examples

### Example #1 
Find medianelementet på listen &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
