---
title: List.MatchesAll
---

# List.MatchesAll


Trả về true nếu tất cả các giá trị trong danh sách đáp ứng hàm điều kiện.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Trả về `true` nếu mọi giá trị trong danh sách đều đáp ứng hàm điều kiện, nếu không trả về `false`.

-   `list`: Danh sách chứa các giá trị cần kiểm tra.
-   `condition`: Điều kiện để kiểm tra với các giá trị trong danh sách.


## Examples

### Example #1
Xác định tất cả giá trị trong danh sách \{11, 12, 13\} có lớn hơn 10 hay không.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Xác định tất cả giá trị trong danh sách \{1, 2, 3\} có lớn hơn 10 hay không.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Xác định xem mọi giá trị văn bản trong danh sách có chứa "anna" khi bỏ qua chữ hoa/chữ thường hay không.
```powerquery
let
    Source = {"Savannah", "Annabelle", "Annals", "wannabe", "MANNA"},
    Result = List.MatchesAll(Source, each Text.Contains(_, "anna", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Xác định xem tất cả các ngày có chứa năm 2021 hay không.
```powerquery
let
    Source = {#date(2021, 11, 28), #date(2021, 1, 14), #date(2021, 12, 31), #date(2021, 7, 6)},
    Result = List.MatchesAll(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
