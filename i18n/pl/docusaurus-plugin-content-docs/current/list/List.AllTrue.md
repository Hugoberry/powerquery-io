---
title: List.AllTrue
---

# List.AllTrue


Zwraca wartość true, jeśli wszystkie wyrażenia mają wartość true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Zwraca wartość true, jeśli wszystkie wyrażenia na liście <code>list</code> mają wartość true.


## Examples

### Example #1 
Sprawdza, czy wszystkie wyrażenia z listy \{true, true, 2 &gt; 0} mają wartość true.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Sprawdza, czy wszystkie wyrażenia z listy \{true, true, 2 &lt; 0} mają wartość true.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
