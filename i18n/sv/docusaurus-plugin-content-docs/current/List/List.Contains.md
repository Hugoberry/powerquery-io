---
title: List.Contains
---

# List.Contains


## Description

Anger om listan innehåller värdet.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Anger om listan <code>list</code> innehåller värdet <code>value</code>.     Returnerar sant om värdet finns i listan. Annars returneras falskt. Ett valfritt ekvationskriterievärde, <code>equationCriteria</code>, kan anges för att hantera likhetstestning. 


## Examples

### Example #1 
Ta reda på om listan \{1, 2, 3, 4, 5} innehåller 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Ta reda på om listan \{1, 2, 3, 4, 5} innehåller 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
