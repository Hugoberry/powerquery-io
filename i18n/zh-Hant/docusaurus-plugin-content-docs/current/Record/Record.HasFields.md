---
title: Record.HasFields
---

# Record.HasFields


指出記錄是否有指定的欄位。


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

傳回邏輯值 (true 或 false)，以指出記錄 <code>record</code> 是否有 <code>fields</code> 中指定的欄位。    使用清單可指定多個欄位值。


## Examples

### Example #1 
檢查記錄是否有 &#34;CustomerID&#34; 欄位。
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
檢查記錄是否有 &#34;CustomerID&#34; 和 &#34;Address&#34; 欄位。
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
