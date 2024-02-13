---
title: List.IsDistinct
---

# List.IsDistinct


Anger om det finns dubbletter i listan.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Returnerar ett logiskt värde om det finns dubbletter i listan <code>list</code>; <code>true</code> om listan är distinkt, <code>false</code> om det finns dubblettvärden. 


## Examples

### Example #1 
Kontrollera om listan \{1, 2, 3} är distinkt (d.v.s. inga dubbletter).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollera om listan \{1, 2, 3, 3} är distinkt (d.v.s. inga dubbletter).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
