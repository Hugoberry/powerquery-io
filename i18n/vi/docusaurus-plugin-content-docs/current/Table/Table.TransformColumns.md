---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Chuyển đổi các giá trị của một hoặc nhiều cột.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Details

Chuyển đổi <code>table</code> bằng cách áp dụng mỗi phép toán trong cột được liệt kê trong <code>transformOperations</code> (với dạng thức là \{ column name, transformation } hoặc \{ column name, transformation, new column type }).    Nếu <code>defaultTransformation</code> được chỉ định, giá trị này sẽ áp dụng cho tất cả các cột không được liệt kê trong <code>transformOperations</code>.    Nếu một cột được liệt kê trong <code>transformOperations</code> không tồn tại, một ngoại lệ sẽ được đưa ra trừ khi tham số tùy chọn <code>missingField</code> chỉ định một giá trị thay thế (ví dụ: <code>MissingField.UseNull</code> hoặc <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Chuyển đổi các giá trị văn bản trong cột [A] thành giá trị số và các giá trị số trong cột [B] thành giá trị văn bản.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
Chuyển đổi các giá trị số trong cột bị thiếu [X] thành các giá trị văn bản, bỏ qua các cột không tồn tại.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
Chuyển đổi các giá trị số trong cột [X] bị thiếu thành giá trị văn bản, đặt mặc định thành null trên các cột không tồn tại.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
Tăng các giá trị số trong cột [B] và chuyển đổi chúng thành giá trị văn bản và chuyển đổi tất cả các cột khác thành số.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
