---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Повертає значення true, якщо функцію умови задовольняє будь-яке значення.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Повертає значення <code>true</code>, якщо функцію умови, <code>condition</code>, задовольняє будь-яке значення у списку <code>list</code>, у протилежному випадку повертає значення <code>false</code>.


## Examples

### Example #1 
Визначити, чи будь-яке значення у списку \{9, 10, 11} більше 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи будь-яке значення у списку \{1, 2, 3} більше 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
