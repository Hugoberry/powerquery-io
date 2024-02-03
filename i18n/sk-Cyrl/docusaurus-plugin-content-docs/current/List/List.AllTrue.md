---
title: List.AllTrue
---

# List.AllTrue


## Description

Vráti hodnotu True, ak majú všetky výrazy hodnotu True.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Vráti hodnotu True, ak majú všetky výrazy v zozname <code>list</code> hodnotu True.


## Examples

### Example #1 
Určte, či všetky výrazy v zozname \{true, true, 2 &gt; 0} majú hodnotu True.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Určte, či všetky výrazy v zozname \{true, true, 2 &lt; 0} majú hodnotu True.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
