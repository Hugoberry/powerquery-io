---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Cho biết có giá trị trùng lặp trong danh sách hay không.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Trả về giá trị lôgic có hay không có giá trị trùng lặp trong danh sách <code>list</code>; <code>true</code> nếu danh sách chứa các giá trị khác biệt, <code>false</code> nếu có giá trị trùng lặp. 


## Examples

### Example #1 
Tìm xem danh sách \{1, 2, 3} có chứa các giá trị khác biệt hay không (tức là không có giá trị trùng lặp nào).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Tìm xem danh sách \{1, 2, 3, 3} có chứa các giá trị khác biệt hay không (tức là không có giá trị trùng lặp nào).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
