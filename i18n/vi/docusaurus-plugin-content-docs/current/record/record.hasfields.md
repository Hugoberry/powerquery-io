---
title: Record.HasFields
---

# Record.HasFields


Cho biết bản ghi có các trường được chỉ định hay không.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Cho biết bản ghi <code>record</code> có các trường được chỉ định trong <code>fields</code> hay không bằng cách trả về giá trị lôgic (true hoặc false).    Có thể chỉ định nhiều giá trị trường bằng cách sử dụng danh sách.


## Examples

### Example #1 
Kiểm tra bản ghi có trường &#34;CustomerID&#34; hay không.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Kiểm tra bản ghi có trường &#34;CustomerID&#34; và &#34;Địa chỉ&#34; hay không.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
