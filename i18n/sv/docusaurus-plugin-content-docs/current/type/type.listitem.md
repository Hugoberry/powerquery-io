---
title: Type.ListItem
---

# Type.ListItem


Returnerar en objekttyp från en listtyp.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Returnerar en objekttyp från en lista <code>type</code>.


## Examples

### Example #1 
Hitta objekttypen i listan &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
