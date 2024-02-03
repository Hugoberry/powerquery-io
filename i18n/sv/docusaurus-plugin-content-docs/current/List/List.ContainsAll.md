---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Anger om en lista innehåller alla värdena i en annan lista.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Anger om listan <code>list</code> innehåller alla värdena i en annan lista, <code>values</code>.    Returnerar true om värdet finns i listan. Annars returneras false. Ett valfritt ekvationsvillkorsvärde, <code>equationCriteria</code>, kan anges för att hantera likhetstestning. 


## Examples

### Example #1 
Ta reda på om listan \{1, 2, 3, 4, 5} innehåller 3 och 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Ta reda på om listan \{1, 2, 3, 4, 5} innehåller 5 och 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
