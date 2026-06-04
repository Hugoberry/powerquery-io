---
title: List.AllTrue
---

# List.AllTrue


Returnează true dacă toate expresiile sunt adevărate.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Returnează true dacă toate expresiile din lista `list` sunt adevărate.


## Examples

### Example #1
Determinaţi dacă toate expresiile din lista \{true, true, 2 > 0\} sunt adevărate.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2
Determinaţi dacă toate expresiile din lista \{true, true, 2 &lt; 0\} sunt adevărate.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
