---
title: List.Single
---

# List.Single


Vraća jednu stavku sa liste za listu dužine jedan. U suprotnom, prijavljuje grešku.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Ako lista `list` sadrži samo jednu stavku, vraća tu stavku. Ako lista sadrži dve ili više stavki ili je prazna, funkcija prijavljuje grešku.


## Examples

### Example #1
Pronalaženje jedne vrednosti sa liste \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Pronalaženje jedne vrednosti sa liste \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
