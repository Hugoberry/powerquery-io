---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

從輸入記錄移除指定的欄位。


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

傳回從輸入 <code>record</code> 中移除清單 <code>fields</code> 所指定之所有欄位的記錄。如果指定的欄位不存在，則擲回例外狀況。


## Examples

### Example #1 
從記錄中移除 &#34;Price&#34; 欄位。
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
從記錄中移除 &#34;Price&#34; 和 &#34;Item&#34; 欄位。
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
