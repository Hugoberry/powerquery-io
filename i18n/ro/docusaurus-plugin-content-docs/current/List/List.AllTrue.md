---
title: List.AllTrue
---

# List.AllTrue


## Description

Returnează true dacă toate expresiile sunt adevărate.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Returnează true dacă toate expresiile din lista <code>list</code> sunt adevărate.


## Examples

### Example #1 
Determinaţi dacă toate expresiile din lista \{true, true, 2 &gt; 0} sunt adevărate.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Determinaţi dacă toate expresiile din lista \{true, true, 2 &lt; 0} sunt adevărate.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
