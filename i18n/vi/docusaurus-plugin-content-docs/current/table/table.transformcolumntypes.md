---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Áp dụng (các) chuyển đổi loại có dạng \{ column, type } bằng cách thức cụ thể.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Remarks

Trả về một bảng từ đầu vào <code>table</code> bằng cách áp dụng tác vụ chuyển đổi cho các cột được chỉ định trong tham số <code>typeTransformations</code> (trong đó định dạng là \{ column name, type name}), bằng cách sử dụng cách thức được chỉ định trong tham số <code>culture</code> (ví dụ: "en-US").    Nếu cột này không tồn tại thì xảy ra trường hợp ngoại lệ.


## Examples

### Example #1 
Chuyển đổi giá trị số trong cột [a] thành giá trị văn bản từ bảng &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
