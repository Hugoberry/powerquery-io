---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Trả về một bảng chỉ có các cột được chỉ định.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Trả về <code>table</code> chỉ có <code>columns</code> được chỉ định.    <ul>       <li><code>table</code>: Bảng được cung cấp.</li>       <li><code>columns</code>: Danh sách các cột từ bảng <code>table</code> sẽ trả về. Các cột trong bảng được trả về sắp xếp theo thứ tự được liệt kê trong <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Tùy chọn)</i> Nên làm gì nếu cột không tồn tại.  Ví dụ: <code>MissingField.UseNull</code> hoặc <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Chỉ bao gồm cột [Name].
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2 
Chỉ bao gồm cột [CustomerID] và [Name].
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3 
Nếu cột được bao gồm không tồn tại, kết quả mặc định là lỗi.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4 
Nếu cột được bao gồm không tồn tại, tùy chọn&lt;code&gt;MissingField.UseNull&lt;/code&gt; sẽ tạo một cột có các giá trị null.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
