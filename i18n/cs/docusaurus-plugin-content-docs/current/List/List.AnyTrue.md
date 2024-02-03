---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Vrátí hodnotu True, pokud má jakýkoliv výraz hodnotu True.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Vrátí hodnotu True, pokud má některý výraz v seznamu <code>list</code> hodnotu True.


## Examples

### Example #1 
Určí, zda má některý výraz v seznamu \{true, false, 2 &gt; 0} hodnotu True.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Určí, zda má některý výraz v seznamu \{2 = 0, false, 2 &lt; 0} hodnotu True.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
