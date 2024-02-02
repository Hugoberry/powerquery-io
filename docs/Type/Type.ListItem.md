---
title: Type.ListItem
---

# Type.ListItem


## Description

Returns an item type from a list type.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Returns an item type from a list <code>type</code>.


## Examples

### Example #1 
Find item type from the list &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
