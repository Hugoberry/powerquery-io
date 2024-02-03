---
title: Type.ListItem
---

# Type.ListItem


## Description

Vraća tip stavke iz tipa liste.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Vraća tip stavke sa liste <code>type</code>.


## Examples

### Example #1 
Pronađite tip stavke sa liste &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
