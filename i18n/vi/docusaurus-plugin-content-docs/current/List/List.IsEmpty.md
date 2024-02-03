---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Trả về true nếu danh sách trống.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

Trả về <code>true</code> nếu danh sách <code>list</code> không chứa giá trị nào (độ dài bằng 0). Nếu danh sách chứa giá trị (độ dài > 0), trả về <code>false</code>.


## Examples

### Example #1 
Tìm ra danh sách \{} trống hay không trống.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Tìm ra danh sách \{1, 2} trống hay không trống.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
