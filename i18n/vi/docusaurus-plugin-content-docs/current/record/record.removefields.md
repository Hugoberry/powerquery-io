---
title: Record.RemoveFields
---

# Record.RemoveFields


Loại bỏ (các) trường được chỉ định từ bản ghi đầu vào.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Trả về một bản ghi loại bỏ tất cả các trường được chỉ định trong danh sách `fields` khỏi đầu vào `record`. Nếu trường được chỉ định không tồn tại thì lỗi sẽ xuất hiện.


## Examples

### Example #1
Loại bỏ trường "Giá" khỏi bản ghi.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Loại bỏ các trường "Giá" và "Mục" khỏi bản ghi.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
