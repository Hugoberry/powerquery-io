---
title: Table.RenameColumns
---

# Table.RenameColumns


Áp dụng (các) tác vụ đổi tên có dạng \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Thực hiện các tác vụ đổi tên cho sẵn đối với các cột trong bảng <code>table</code>. Tác vụ thay thế <code>renames</code> bao gồm một danh sách có hai giá trị là tên cột cũ và tên cột mới, được cung cấp trong một danh sách.    Nếu cột này không tồn tại thì một ngoại lệ được đưa ra trừ khi tham số tùy chọn <code>missingField</code> chỉ định một thay thế (ví dụ: <code>MissingField.UseNull</code> hoặc <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Thay thế tên cột &#34;CustomerNum&#34; bằng &#34;CustomerID&#34; trong bảng.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Thay thế tên cột &#34;CustomerNum&#34; bằng &#34;CustomerID&#34; và &#34;PhoneNum&#34; bằng &#34;Phone&#34; trong bảng.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3 
Thay thế tên cột &#34;NewCol&#34; bằng &#34;NewColumn&#34; trong bảng và bỏ qua nếu cột này không tồn tại.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
