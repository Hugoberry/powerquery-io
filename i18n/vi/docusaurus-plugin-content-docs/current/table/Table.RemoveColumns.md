---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Loại bỏ các cột được chỉ định.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Loại bỏ <code>columns</code> đã chỉ định từ <code>table</code> được cung cấp.    Nếu cột đã chỉ định không tồn tại thì sẽ xảy ra lỗi trừ khi tham số tùy chọn <code>missingField</code> chỉ định hành vi thay thế (ví dụ như <code>MissingField.UseNull</code> hoặc <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Loại bỏ cột [Phone] khỏi bảng.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2 
Cố gắng loại bỏ cột không tồn tại khỏi bảng.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
