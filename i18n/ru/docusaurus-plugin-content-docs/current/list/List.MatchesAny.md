---
title: List.MatchesAny
---

# List.MatchesAny


Возвращает значение true, если функции условия соответствует любое значение.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Возвращает <code>true</code>, если функции условия <code>condition</code> соответствует любое значение в списке <code>list</code>, в противном случае возвращает значение <code>false</code>.


## Examples

### Example #1 
Определить, есть ли в списке \{9, 10, 11} хотя бы одно значение больше 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Определить, есть ли в списке \{1, 2, 3} хотя бы одно значение больше 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
