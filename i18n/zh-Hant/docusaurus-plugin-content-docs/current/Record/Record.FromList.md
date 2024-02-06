---
title: Record.FromList
---

# Record.FromList


已知欄位值清單和一組欄位，傳回記錄。


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

已知欄位值 <code>list</code> 和一組欄位，傳回記錄。<code>fields</code> 可以指定為文字值清單或記錄類型。如果欄位不是唯一的，則擲回錯誤。


## Examples

### Example #1 
根據欄位值清單和欄位名稱清單，建立記錄。
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
根據欄位值清單和記錄類型，建立記錄。
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
