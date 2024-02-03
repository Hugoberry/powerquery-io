---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Zwraca wartość true, jeśli wszystkie wartości z listy spełniają warunek określony przez funkcję warunku.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Zwraca wartość <code>true</code>, jeśli wszystkie wartości z listy <code>list</code> spełniają warunek <code>condition</code> określony przez funkcję warunku; w przeciwnym razie zwraca wartość <code>false</code>.


## Examples

### Example #1 
Ustal, czy wszystkie wartości z listy \{11, 12, 13} są większe niż 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Ustal, czy wszystkie wartości z listy \{1, 2, 3} są większe niż 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
