---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Повертає значення true, якщо будь-який вираз має значення true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Повертає значення true, якщо будь-який вираз у списку <code>list</code> має значення true.


## Examples

### Example #1 
Визначити, чи будь-який із виразів у списку \{true, false, 2 &gt; 0} має значення true.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи будь-який із виразів у списку \{2 = 0, false, 2 &lt; 0} має значення true.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
