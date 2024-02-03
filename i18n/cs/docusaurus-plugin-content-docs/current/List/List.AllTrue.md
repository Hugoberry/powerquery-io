---
title: List.AllTrue
---

# List.AllTrue


## Description

Vrátí hodnotu True, pokud mají všechny výrazy hodnotu True.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Vrátí hodnotu True, pokud mají všechny výrazy v seznamu <code>list</code> hodnotu True.


## Examples

### Example #1 
Určí, zda mají všechny výrazy v seznamu \{true, true, 2 &gt; 0} hodnotu True.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Určí, zda mají všechny výrazy v seznamu \{true, true, 2 &lt; 0} hodnotu True.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
