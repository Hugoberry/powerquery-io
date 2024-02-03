---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Trả về true nếu giá trị bất kỳ đáp ứng hàm điều kiện.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Trả về <code>true</code> nếu hàm điều kiện <code>condition</code> được đáp ứng bởi giá trị bất kỳ trong danh sách <code>list</code>, nếu không trả về <code>false</code>.


## Examples

### Example #1 
Tìm ra có giá trị nào trong danh sách \{9, 10, 11} lớn hơn 10 hay không.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Tìm ra có giá trị nào trong danh sách \{1, 2, 3} lớn hơn 10 hay không.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
