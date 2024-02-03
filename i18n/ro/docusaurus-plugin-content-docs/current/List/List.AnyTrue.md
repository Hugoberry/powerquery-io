---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Returnează true dacă orice expresie este adevărată.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Returnează true dacă orice expresie din lista <code>list</code> este adevărată.


## Examples

### Example #1 
Determinaţi dacă oricare dintre expresiile din lista \{true, false, 2 &gt; 0} sunt adevărate.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Determinaţi dacă oricare dintre expresiile din lista \{2 = 0, false, 2 &lt; 0} este adevărată.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
