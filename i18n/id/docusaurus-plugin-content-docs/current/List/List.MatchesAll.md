---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Menghasilkan benar jika fungsi kondisi dipenuhi oleh semua nilai dalam daftar.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Menghasilkan <code>true</code> jika fungsi kondisi, <code>condition</code>, dipenuhi oleh semua nilai dalam daftar <code>list</code>, atau jika sebaliknya, <code>false</code> akan dihasilkan.


## Examples

### Example #1 
Menentukan jika semua nilai dalam daftar \{11, 12, 13} lebih besar dari 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Menentukan jika semua nilai dalam daftar \{1, 2, 3} lebih besar dari 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
