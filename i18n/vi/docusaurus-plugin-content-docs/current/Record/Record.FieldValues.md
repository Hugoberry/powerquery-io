---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Trả về danh sách giá trị trường.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Trả về danh sách giá trị trường trong bản ghi <code>record</code>.


## Examples

### Example #1 
Tìm giá trị trường trong bản ghi.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
