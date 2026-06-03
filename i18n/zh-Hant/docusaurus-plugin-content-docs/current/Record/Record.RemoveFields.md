---
title: Record.RemoveFields
---

# Record.RemoveFields


從輸入記錄移除指定的欄位。


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

傳回從輸入 `record` 中移除清單 `fields` 所指定的所有欄位的記錄。如果指定的欄位不存在，則引發錯誤。


## Examples

### Example #1
從記錄中移除 "Price" 欄位。
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
從記錄中移除 "Price" 和 "Item" 欄位。
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
