---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Zwraca wartość true, jeśli dowolne wyrażenie ma wartość true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Zwraca wartość true, jeśli dowolne wyrażenie na liście <code>list</code> ma wartość true.


## Examples

### Example #1 
Sprawdza, czy dowolne wyrażenie z listy \{true, false, 2 &gt; 0} ma wartość true.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Sprawdza, czy dowolne wyrażenie z listy \{2 = 0, false, 2 &lt; 0} ma wartość true.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
