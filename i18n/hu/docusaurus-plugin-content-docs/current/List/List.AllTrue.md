---
title: List.AllTrue
---

# List.AllTrue


## Description

Igaz értéket ad vissza, ha az összes kifejezés igaz.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Igaz értéket ad vissza, ha a(z) <code>list</code> listán szereplő összes kifejezés igaz.


## Examples

### Example #1 
Annak megállapítása, hogy a \{true, true, 2 &gt; 0} listán szereplő összes kifejezés igaz-e
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Annak megállapítása, hogy a \{true, true, 2 &lt; 0} listán szereplő összes kifejezés igaz-e
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
