---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Mengembalikan benar jika fungsi syarat dipuaskan oleh sebarang nilai.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Mengembalikan <code>true</code> jika fungsi syarat, <code>condition</code>, dipuaskan oleh sebarang nilai dalam senarai <code>list</code>, sebaliknya mengembalikan <code>false</code>.


## Examples

### Example #1 
Cari jika sebarang nilai dalam senarai \{9, 10, 11} yang lebih besar daripada 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Cari jika sebarang nilai dalam senarai \{1, 2, 3} yang lebih besar daripada 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
