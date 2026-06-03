---
title: List.Sum
---

# List.Sum


Retourneert de som van de items in de lijst.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Retourneert de som van de waarden in de lijst `list` die niet gelijk zijn aan nul. Retourneert null als er in de lijst geen waarden staan die niet gelijk zijn aan nul.


## Examples

### Example #1
De som van de getallen in de lijst `{1, 2, 3}` zoeken.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
