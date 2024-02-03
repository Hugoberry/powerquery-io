---
title: Record.Combine
---

# Record.Combine


## Description

結合指定清單中的記錄。


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

結合指定 <code>records</code> 中的記錄。如果 <code>records</code> 包含非記錄值，則傳回錯誤。


## Examples

### Example #1 
根據記錄建立一個合併的記錄。
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
