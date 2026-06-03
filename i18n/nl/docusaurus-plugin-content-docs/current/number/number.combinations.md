---
title: Number.Combinations
---

# Number.Combinations


Retourneert het aantal unieke combinaties.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Retourneert het aantal unieke combinaties uit een lijst items, `setSize`, met de opgegeven combinatiegrootte, `combinationSize`.

-   `setSize`: het aantal items in de lijst.
-   `combinationSize`: het aantal items in elke combinatie.


## Examples

### Example #1
Het aantal combinaties opzoeken uit een totaal van vijf items wanneer elke combinatie een groep van drie items is.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
