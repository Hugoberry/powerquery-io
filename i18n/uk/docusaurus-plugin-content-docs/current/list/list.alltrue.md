---
title: List.AllTrue
---

# List.AllTrue


Повертає значення true, якщо всі вирази мають значення true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Повертає значення true, якщо всі вирази у списку `list` мають значення true.


## Examples

### Example #1
Визначити, чи всі вирази у списку \{true, true, 2 > 0\} мають значення true.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2
Визначити, чи всі вирази у списку \{true, true, 2 &lt; 0\} мають значення true.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
