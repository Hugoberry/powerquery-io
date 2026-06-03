---
title: List.Contains
---

# List.Contains


Cho biết danh sách có chứa giá trị không.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Cho biết liệu danh sách có chứa giá trị được chỉ định hay không. Trả về `true` nếu tìm thấy giá trị trong danh sách, nếu không, sẽ trả về `false`.

-   `list`: Danh sách cần tìm kiếm.
-   `value`: Giá trị cần tìm kiếm trong danh sách.
-   `equationCriteria`: (Tùy chọn) Trình so sánh được dùng để xác định xem hai giá trị có bằng nhau hay không.


## Examples

### Example #1
Xác định xem danh sách \{1, 2, 3, 4, 5\} có chứa 3 hay không.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Xác định xem danh sách \{1, 2, 3, 4, 5\} có chứa 6 hay không.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Xác định xem danh sách có từ "rhubarb" hay không, bỏ qua việc phân biệt chữ hoa và chữ thường.
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Xác định xem danh sách này có chứa ngày 8 tháng 4 năm 2022 hay không.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
