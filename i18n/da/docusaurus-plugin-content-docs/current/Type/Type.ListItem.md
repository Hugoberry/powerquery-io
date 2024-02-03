---
title: Type.ListItem
---

# Type.ListItem


## Description

Returnerer en elementtype fra en listetype.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Returnerer en elementtype fra en liste <code>type</code>.


## Examples

### Example #1 
Find elementtypen på listen &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
