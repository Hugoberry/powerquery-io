---
title: List.AllTrue
---

# List.AllTrue


## Description

Повертає значення true, якщо всі вирази мають значення true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Повертає значення true, якщо всі вирази у списку <code>list</code> мають значення true.


## Examples

### Example #1 
Визначити, чи всі вирази у списку \{true, true, 2 &gt; 0} мають значення true.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи всі вирази у списку \{true, true, 2 &lt; 0} мають значення true.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
