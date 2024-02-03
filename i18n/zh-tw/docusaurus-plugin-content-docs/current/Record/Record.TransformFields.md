---
title: Record.TransformFields
---

# Record.TransformFields


## Description

套用指定的轉換之後，傳回記錄。


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

將清單 <code>transformOperations</code> 中指定的轉換套用至 <code>record</code> 之後，傳回記錄。    一個或多個欄位可能會在指定的時間轉換。      <div>如果轉換單一欄位，<code>transformOperations</code> 就應該是包含兩個項目的清單。<code>transformOperations</code> 中的第一個項目會指定欄位名稱，而 <code>transformOperations</code> 中的第二個項目會指定要用於轉換的函數。例如 <code>\{"Quantity", Number.FromText}</code></div>      <div>如果轉換多個欄位，<code>transformOperations</code> 就應該是包含多份清單的清單，其中每個內部清單都是欄位名稱與轉換作業的配對。例如 <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
將 &#34;Price&#34; 欄位轉換成數字。
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2 
將 &#34;OrderID&#34; 與 &#34;Price&#34; 欄位轉換成數字。
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
