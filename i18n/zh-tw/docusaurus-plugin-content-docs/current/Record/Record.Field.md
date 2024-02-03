---
title: Record.Field
---

# Record.Field


## Description

傳回記錄中指定欄位的值。


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

傳回 <code>record</code> 中指定 <code>field</code> 的值。如果找不到欄位，則擲回例外狀況。


## Examples

### Example #1 
找出記錄中 &#34;CustomerID&#34; 欄位的值。
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
