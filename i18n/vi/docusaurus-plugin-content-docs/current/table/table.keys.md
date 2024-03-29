---
title: Table.Keys
---

# Table.Keys


Trả về các khóa của bảng được chỉ định.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

Trả về các khóa của bảng được chỉ định.


## Examples

### Example #1 
Tải danh sách khóa cho bảng.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    keys = Table.Keys(tableWithKeys)
in
    keys
```

Result: 
```powerquery
{[Columns = {"Id"}, Primary = true]}
```




## Category
Table.Transformation
