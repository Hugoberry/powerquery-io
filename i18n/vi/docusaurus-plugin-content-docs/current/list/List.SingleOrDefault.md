---
title: List.SingleOrDefault
---

# List.SingleOrDefault


Trả về mục một danh sách đối với danh sách có độ dài là một và giá trị mặc định đối với danh sách trống.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

Nếu chỉ có một mục trong danh sách <code>list</code>, trả về mục đó.    Nếu danh sách trống, hàm sẽ trả về giá trị null từ khi <code>default</code> tùy chọn được chỉ định. Nếu có nhiều mục trong danh sách, hàm sẽ trả về một lỗi.


## Examples

### Example #1 
Tìm giá trị đơn trong danh sách \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Tìm giá trị đơn trong danh sách \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Tìm giá trị đơn trong danh sách \{}. Nếu trống, trả về -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
