---
title: Type.ListItem
---

# Type.ListItem


## Description

ส่งกลับประเภทรายการจากประเภทรายการ


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

ส่งกลับประเภทรายการจากรายการ <code>type</code>.


## Examples

### Example #1 
ค้นหาประเภทรายการจากรายการ &lt;code&gt;\{number}&lt;/code&gt;
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
