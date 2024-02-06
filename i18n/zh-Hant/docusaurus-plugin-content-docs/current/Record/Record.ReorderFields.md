---
title: Record.ReorderFields
---

# Record.ReorderFields


將指定的欄位重新排列為新的順序。


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

按照清單 <code>fieldOrder</code> 中指定的欄位順序重新排列 <code>record</code> 中的欄位之後，傳回記錄。欄位值會保存，而且 <code>fieldOrder</code> 中未列出的欄位會保留在原始位置。


## Examples

### Example #1 
重新排列記錄中的欄位。
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
