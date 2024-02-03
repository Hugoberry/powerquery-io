---
title: Type.ListItem
---

# Type.ListItem


## Description

Menghasilkan jenis item dari jenis daftar.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Menghasilkan jenis item dari <code>type</code> daftar.


## Examples

### Example #1 
Cari jenis item dari &lt;code&gt;\{number}&lt;/code&gt; daftar.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
