---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

傳回記錄中指定欄位的值，如果找不到，則傳回預設值。


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

傳回記錄 <code>record</code> 中指定欄位 <code>field</code> 的值。如果找不到欄位，則傳回選擇性的 <code>defaultValue</code>。


## Examples

### Example #1 
找出記錄中 &#34;Phone&#34; 欄位的值，如果該欄位不存在，則傳回 Null。
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
找出記錄中 &#34;Phone&#34; 欄位的值，如果該欄位不存在，則傳回預設值。
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
