---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Loại bỏ (các) trường được chỉ định từ bản ghi đầu vào.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Trả về một bản ghi loại bỏ tất cả các trường được chỉ định trong danh sách <code>fields</code> khỏi đầu vào <code>record</code>. Nếu trường được chỉ định không tồn tại thì một ngoại lệ được đưa ra.


## Examples

### Example #1 
Loại bỏ trường &#34;Giá&#34; khỏi bản ghi.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Loại bỏ các trường &#34;Giá&#34; và &#34;Mục&#34; khỏi bản ghi.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
