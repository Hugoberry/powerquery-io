---
title: List.AnyTrue
---

# List.AnyTrue


Igaz értéket ad vissza, ha bármely kifejezés igaz.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Igaz értéket ad vissza, ha a(z) `list` listán szereplő bármely kifejezés igaz.


## Examples

### Example #1
Annak megállapítása, hogy a \{true, false, 2 > 0\} listán szereplő bármely kifejezés igaz-e
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2
Annak megállapítása, hogy a \{2 = 0, false, 2 &lt; 0\} listán szereplő bármely kifejezés igaz-e
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
