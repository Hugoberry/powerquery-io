---
title: List.AllTrue
---

# List.AllTrue


Vrátí hodnotu True, pokud mají všechny výrazy hodnotu True.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Vrátí hodnotu True, pokud mají všechny výrazy v seznamu `list` hodnotu True.


## Examples

### Example #1
Určí, zda mají všechny výrazy v seznamu \{true, true, 2 > 0\} hodnotu True.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2
Určí, zda mají všechny výrazy v seznamu \{true, true, 2 &lt; 0\} hodnotu True.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
