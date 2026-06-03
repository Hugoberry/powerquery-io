---
title: List.Sum
---

# List.Sum


Restituisce la somma degli elementi nell'elenco.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Restituisce la somma dei valori non Null nell'elenco `list`. Restituisce Null se non sono presenti valori non Null nell'elenco.


## Examples

### Example #1
Trovare la somma dei numeri nell'elenco `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
