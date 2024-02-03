---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Повертає значення true, якщо функцію умови задовольняють усі значення у списку.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Повертає значення <code>true</code>, якщо функцію умови, <code>condition</code>, задовольняють усі значення у списку <code>list</code>, у протилежному випадку повертає значення <code>false</code>.


## Examples

### Example #1 
Визначити, чи всі значення у списку \{11, 12, 13} більші 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи всі значення у списку \{1, 2, 3} більші 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
