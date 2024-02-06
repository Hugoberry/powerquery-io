---
title: Number.Permutations
---

# Number.Permutations


Retourneert het aantal permutaties.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Retourneert het aantal permutaties dat kan worden gegenereerd van een aantal items, <code>setSize</code>, met een opgegeven permutatiegrootte, <code>permutationSize</code>.


## Examples

### Example #1 
Het aantal permutaties uit een totaal van vijf items in groepen van drie zoeken.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
