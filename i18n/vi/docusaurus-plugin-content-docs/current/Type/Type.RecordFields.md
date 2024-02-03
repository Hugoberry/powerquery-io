---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Trả về bản ghi mô tả các trường của loại bản ghi với mỗi trường của loại bản ghi trả về có tên tương ứng và một giá trị.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Trả về bản ghi mô tả các trường của bản ghi <code>type</code>. Mỗi trường của loại bản ghi trả về có tên tương ứng và một giá trị theo dạng bản ghi <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Tìm tên và giá trị của bản ghi &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
