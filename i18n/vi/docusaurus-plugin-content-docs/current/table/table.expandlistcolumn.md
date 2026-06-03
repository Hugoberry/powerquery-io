---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Cho một cột danh sách trong một bảng, hãy tạo một bản sao của một hàng cho mỗi giá trị trong danh sách.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Khi giá trị là `table`, trong đó `column` có chứa một danh sách các giá trị, hãy tách danh sách thành một hàng cho từng giá trị. Giá trị trong các cột khác được sao chép trong mỗi hàng mới được tạo. Hàm này cũng có thể mở rộng các bảng lồng nhau bằng cách coi chúng là danh sách bản ghi.


## Examples

### Example #1
Tách cột danh sách \[Tên\].
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```


### Example #2
Tách cột có chứa bảng lồng nhau \[Thành phần\].
```powerquery
Table.ExpandListColumn(
    #table(
        {"Part", "Components"},
        {
            {"Tool", #table({"Name", "Quantity"}, {{"Thingamajig", 2}, {"Widget", 3}})}
        }
    ),
    "Components"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Part = "Tool", Components = [Name = "Thingamajig", Quantity = 2]],
    [Part = "Tool", Components = [Name = "Widget", Quantity = 3]]
})
```




## Category
Table.Transformation
