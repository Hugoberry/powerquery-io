---
title: List.AllTrue
---

# List.AllTrue


Возвращает значение true, если все выражения равны true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Возвращает значение true, если все выражения в списке <code>list</code> равны true.


## Examples

### Example #1 
Определить, все ли выражения в списке \{true, true, 2 &gt; 0} истинны.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Определить, все ли выражения в списке \{true, true, 2 &lt; 0} истинны.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
