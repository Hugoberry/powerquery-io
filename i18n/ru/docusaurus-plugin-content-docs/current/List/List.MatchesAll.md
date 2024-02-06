---
title: List.MatchesAll
---

# List.MatchesAll


Возвращает значение true, если функции условия удовлетворяют все значения в списке.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Возвращает <code>true</code>, если функции условия <code>condition</code> удовлетворяют все значения в списке <code>list</code>, в противном случае возвращает значение <code>false</code>.


## Examples

### Example #1 
Определить, все ли значения в списке \{11, 12, 13} больше 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Определить, все ли значения в списке \{1, 2, 3} больше 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
