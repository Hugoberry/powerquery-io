---
title: Record.RenameFields
---

# Record.RenameFields


采用 \{ old, new } 形式从列表中应用重命名。


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

将输入 <code>record</code> 中的字段重命名为列表 <code>renames</code> 中指定的新字段名称后，返回一个记录。对于多个重命名，可以使用嵌套的列表(\{ \{old1, new1}, \{old2, new2} })。


## Examples

### Example #1 
从记录将字段 &#34;UnitPrice&#34; 重命名为 &#34;Price&#34;。
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2 
从记录将字段 &#34;UnitPrice&#34; 重命名为 &#34;Price&#34;，将字段 &#34;OrderNum&#34; 重命名为 &#34;OrderID&#34;。
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
