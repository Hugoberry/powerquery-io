---
title: List.AnyTrue
---

# List.AnyTrue


Возвращает значение true, если любое выражение истинно.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Возвращает значение true, если любое выражение в списке <code>list</code> истинно.


## Examples

### Example #1 
Определить, есть ли в списке \{true, false, 2 &gt; 0} истинные выражения.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Определить, есть ли в списке \{2 = 0, false, 2 &lt; 0} истинные выражения.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
