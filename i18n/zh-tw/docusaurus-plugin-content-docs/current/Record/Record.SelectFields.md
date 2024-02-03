---
title: Record.SelectFields
---

# Record.SelectFields


## Description

傳回只包含指定欄位的記錄。


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

根據輸入 <code>record</code> 傳回只包含清單 <code>fields</code> 中指定之欄位的記錄。


## Examples

### Example #1 
選取記錄中的 &#34;Item&#34; 和 &#34;Price&#34; 欄位。
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
