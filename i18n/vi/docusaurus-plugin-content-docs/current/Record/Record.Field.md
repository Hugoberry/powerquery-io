---
title: Record.Field
---

# Record.Field


Trả về giá trị của trường được chỉ định trong bản ghi.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Trả về giá trị của <code>field</code> được chỉ định trong <code>record</code>. Nếu không tìm thấy trường này thì một ngoại lệ được đưa ra.


## Examples

### Example #1 
Tìm giá trị của trường &#34;CustomerID&#34; trong bản ghi.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
