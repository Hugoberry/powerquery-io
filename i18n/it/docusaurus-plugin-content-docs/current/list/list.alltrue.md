---
title: List.AllTrue
---

# List.AllTrue


Restituisce true se tutte le espressioni sono true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Restituisce true se tutte le espressioni dell'elenco <code>list</code> sono true.


## Examples

### Example #1 
Determina se tutte le espressioni dell&#39;elenco \{true, true, 2 &gt; 0} sono true.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Determina se tutte le espressioni dell&#39;elenco \{true, true, 2 &lt; 0} sono true.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
