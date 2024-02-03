---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Тізімдегі барлық мәндер шарт функциясын орындаса, шын мәнін қайтарады.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

<code>list</code> тізіміндегі барлық мәндер <code>condition</code> шарт функциясын орындаса, <code>true</code> мәнін, олай болмаса <code>false</code> мәнін қайтарады.


## Examples

### Example #1 
\{11, 12, 13} тізіміндегі барлық мәндердің 10-нан үлкен болуын анықтау.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3} тізіміндегі барлық мәндердің 10-нан үлкен болуын анықтау.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
