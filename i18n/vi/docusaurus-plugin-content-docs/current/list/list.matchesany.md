---
title: List.MatchesAny
---

# List.MatchesAny


Trả về true nếu giá trị bất kỳ đáp ứng hàm điều kiện.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Trả về `true` nếu bất kỳ giá trị nào trong danh sách đáp ứng hàm điều kiện, nếu không trả về `false`.

-   `list`: Danh sách chứa các giá trị cần kiểm tra.
-   `condition`: Điều kiện để kiểm tra với các giá trị trong danh sách.


## Examples

### Example #1
Xác định xem có giá trị nào trong danh sách \{9, 10, 11\} lớn hơn 10 hay không.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Xác định xem có giá trị nào trong danh sách \{1, 2, 3\} lớn hơn 10 hay không.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Xác định xem bất kỳ giá trị văn bản nào trong danh sách có chứa "cat" khi bỏ qua chữ hoa/chữ thường hay không.
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Xác định xem bất kỳ ngày nào có chứa năm 2021 hay không.
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
