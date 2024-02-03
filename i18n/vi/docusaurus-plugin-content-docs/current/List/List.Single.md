---
title: List.Single
---

# List.Single


## Description

Trả về mục một danh sách đối với danh sách có độ dài là một, nếu không đưa ra một ngoại lệ.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Nếu chỉ có một mục trong danh sách <code>list</code>, trả về mục đó.    Nếu có nhiều mục hoặc danh sách trống thì hàm đưa ra một ngoại lệ.


## Examples

### Example #1 
Tìm giá trị đơn trong danh sách \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Tìm giá trị đơn trong danh sách \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
