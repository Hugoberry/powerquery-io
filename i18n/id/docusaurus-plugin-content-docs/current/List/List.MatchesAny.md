---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Menghasilkan benar jika fungsi kondisi dipenuhi oleh nilai apa pun.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Menghasilkan <code>true</code> jika fungsi kondisi, <code>condition</code>, dipenuhi oleh nilai apa pun dalam daftar <code>list</code>, atau jika sebaliknya, <code>false</code> akan dihasilkan.


## Examples

### Example #1 
Mencari jika nilai apa pun dalam daftar \{9, 10, 11} lebih besar dari 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Mencari jika nilai apa pun dalam daftar \{1, 2, 3} lebih besar dari 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
