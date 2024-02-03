---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Trả về loại không phải giá trị null từ một loại.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Trả về loại không phải <code>giá trị null</code> từ <code>type</code>.


## Examples

### Example #1 
Trả về loại không phải giá trị null của &lt;code&gt;loại số không phải giá trị null&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
