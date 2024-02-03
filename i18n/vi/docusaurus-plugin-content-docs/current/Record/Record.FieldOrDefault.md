---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Trả về giá trị của trường được chỉ định trong bản ghi hoặc giá trị mặc định nếu không tìm thấy trường.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Trả về giá trị của trường được chỉ định <code>field</code> trong bản ghi <code>record</code>. Nếu không tìm thấy trường thì <code>defaultValue</code> tùy chọn được trả về.


## Examples

### Example #1 
Tìm giá trị của trường &#34;Điện thoại&#34; trong bản ghi hoặc trả về null nếu không giá trị này tồn tại.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Tìm giá trị của trường &#34;Điện thoại&#34; trong bản ghi hoặc trả về giá trị mặc định nếu giá trị này không tồn tại.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
