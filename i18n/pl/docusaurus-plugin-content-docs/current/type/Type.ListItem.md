---
title: Type.ListItem
---

# Type.ListItem


Zwraca typ elementu z typu listy.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Zwraca typ elementu z listy <code>type</code>.


## Examples

### Example #1 
Znajdź typ elementu na liście &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
