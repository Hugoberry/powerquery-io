---
title: Record.RenameFields
---

# Record.RenameFields


## Description

以 \{ old, new } 的格式套用清單中的重新命名。


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

將輸入 <code>record</code> 中的欄位重新命名為清單 <code>renames</code> 中指定的新欄位名稱之後，傳回記錄。如果有多個重新命名，可能會使用巢狀清單 (\{ \{old1, new1}, \{old2, new2} }。


## Examples

### Example #1 
將記錄中的 &#34;UnitPrice&#34; 欄位重新命名為 &#34;Price&#34;。
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
將記錄中的 &#34;UnitPrice&#34; 欄位重新命名為 &#34;Price&#34;, 並將 &#34;OrderNum&#34; 重新命名為 &#34;OrderID&#34;。
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
