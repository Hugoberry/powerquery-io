---
title: Type.ListItem
---

# Type.ListItem


## Description

Vráti typ položky z typu zoznamu.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Vráti typ položky zo zoznamu <code>type</code>.


## Examples

### Example #1 
Nájdi typ položky zo zoznamu &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
