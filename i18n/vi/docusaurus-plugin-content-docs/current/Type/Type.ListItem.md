---
title: Type.ListItem
---

# Type.ListItem


## Description

Trả về loại mục từ loại danh sách.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Trả về loại mục từ loại danh sách <code>type</code>.


## Examples

### Example #1 
Tìm loại mục từ &lt;code&gt;\{number}&lt;/code&gt; danh sách.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
