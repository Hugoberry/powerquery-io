---
title: List.ContainsAny
---

# List.ContainsAny


Cho biết nơi một danh sách bao gồm bất kỳ giá trị nào trong số các giá trị trong một danh sách khác.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Cho biết liệu danh sách có chứa bất kỳ giá trị nào của một danh sách khác hay không. Trả về `true` nếu tìm thấy giá trị trong danh sách này, nếu không, sẽ trả về `false`.

-   `list`: Danh sách cần tìm kiếm.
-   `values`: Danh sách các giá trị cần tìm kiếm trong danh sách đầu tiên.
-   `equationCriteria`: (Tùy chọn) Trình so sánh được dùng để xác định xem hai giá trị có bằng nhau hay không.


## Examples

### Example #1
Xác định xem danh sách \{1, 2, 3, 4, 5\} có chứa 3 hoặc 9 hay không.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Xác định xem danh sách \{1, 2, 3, 4, 5\} có chứa 6 hoặc 7 hay không.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Xác định xem danh sách này có chứa ngựa hoặc cú hay không, khi không phân biệt chữ hoa/thường.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Xác định xem danh sách này có chứa ngày 8 tháng 4 năm 2022 hoặc ngày 12 tháng 1 năm 2021 hay không.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
