---
title: List.Single
---

# List.Single


Trả về mục một danh sách đối với danh sách có độ dài là một, nếu không sẽ xuất hiện lỗi.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Nếu chỉ có một mục trong danh sách `list`, trả về mục đó. Nếu có nhiều mục hoặc danh sách trống thì hàm sẽ đưa ra lỗi.


## Examples

### Example #1
Tìm giá trị đơn trong danh sách \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Tìm giá trị đơn trong danh sách \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
