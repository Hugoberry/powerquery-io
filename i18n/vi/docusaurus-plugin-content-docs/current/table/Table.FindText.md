---
title: Table.FindText
---

# Table.FindText


Trả về tất cả các hàng chứa văn bản cho sẵn trong bảng.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Trả về các hàng trong bảng <code>table</code> chứa văn bản <code>text</code>. Nếu không tìm thấy văn bản này thì một bảng trống được trả về.


## Examples

### Example #1 
Tìm các hàng trong bảng chứa &#34;Bob&#34;.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
