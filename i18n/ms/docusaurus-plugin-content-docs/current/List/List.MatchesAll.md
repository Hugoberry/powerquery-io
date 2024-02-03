---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Mengembalikan benar jika fungsi syarat dipuaskan oleh semua nilai dalam senarai.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Mengembalikan <code>true</code> jika fungsi syarat, <code>condition</code>, dipuaskan oleh semua nilai dalam senarai <code>list</code>, sebaliknya mengembalikan <code>false</code>.


## Examples

### Example #1 
Menentukan sama ada semua nilai dalam senarai \{11, 12, 13} adalah lebih besar daripada 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Menentukan sama ada semua nilai dalam senarai \{1, 2, 3} adalah lebih besar daripada 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
