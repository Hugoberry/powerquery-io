---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Anger om en lista innehåller något av värdena i en annan lista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Anger om listan <code>list</code> innehåller något av värdena i en annan lista, <code>values</code>.        Returnerar true om värdet finns i listan. Annars returneras false. Ett valfritt ekvationsvillkorsvärde, <code>equationCriteria</code>, kan anges för att hantera likhetstestning. 


## Examples

### Example #1 
Ta reda på om listan \{1, 2, 3, 4, 5} innehåller 3 eller 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Ta reda på om listan \{1, 2, 3, 4, 5} innehåller 6 eller 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
