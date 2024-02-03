---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Кез келген мән шарт функциясын орындаса, шын мәнін қайтарады.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

<code>list</code> тізіміндегі мәндердің кез келгені <code>condition</code> шарт функциясын орындаса, <code>true</code> мәнін, олай болмаса <code>false</code> мәнін қайтарады.


## Examples

### Example #1 
\{9, 10, 11} тізіміндегі мәндердің кез келгенінің 10-нан үлкен болуын анықтау.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3} тізіміндегі мәндердің кез келгенінің 10-нан үлкен болуын анықтау.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
