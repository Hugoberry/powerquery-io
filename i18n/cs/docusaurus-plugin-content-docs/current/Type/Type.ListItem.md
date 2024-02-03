---
title: Type.ListItem
---

# Type.ListItem


## Description

Vrátí typ položky z typu seznamu.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Vrátí typ položky ze seznamu <code>type</code>.


## Examples

### Example #1 
Umožňuje najít typ položky ze seznamu &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
