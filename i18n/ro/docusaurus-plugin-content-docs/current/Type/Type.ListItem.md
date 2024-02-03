---
title: Type.ListItem
---

# Type.ListItem


## Description

Returnează un tip de element dintr-o listă de tipuri.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Returnează un tip de element dintr-o listă <code>type</code>.


## Examples

### Example #1 
Găsiți tipul elementului din listă &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
