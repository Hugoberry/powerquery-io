---
title: List.AllTrue
---

# List.AllTrue


Retourne true si toutes les expressions ont la valeur true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Retourne true si toutes les expressions dans la liste <code>list</code> ont la valeur true.


## Examples

### Example #1 
Détermine si toutes les expressions dans la liste \{true, true, 2 &gt; 0} ont la valeur true.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Détermine si toutes les expressions dans la liste \{true, true, 2 &lt; 0} ont la valeur true.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
