---
title: Type.ListItem
---

# Type.ListItem


## Description

Vrne vrsto elementa z vrste seznama.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Vrne vrsto elementa s seznama <code>type</code>.


## Examples

### Example #1 
Poiščite vrsto elementa s seznama &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
