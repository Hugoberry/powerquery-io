---
title: List.IsDistinct
---

# List.IsDistinct


Udáva, či sa v zozname nachádzajú duplikáty.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Vráti logickú hodnotu s informáciami, či sa v zozname `list` nachádzajú duplikáty; hodnotu `true`, ak je zoznam jedinečný, hodnotu `false`, ak sa v ňom nachádzajú duplicitné hodnoty.


## Examples

### Example #1
Zistite, či zoznam \{1, 2, 3\} je jedinečný (t. j. bez duplikátov).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Zistite, či zoznam \{1, 2, 3, 3\} je jedinečný (t. j. bez duplikátov).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
