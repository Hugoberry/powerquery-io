---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Vráti hodnotu True, ak má niektorý výraz hodnotu True.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Vráti hodnotu True, ak má niektorý výraz v zozname <code>list</code> hodnotu True.


## Examples

### Example #1 
Určte, či niektorý z výrazov v zozname \{true, false, 2 &gt; 0} má hodnotu True.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Určte, či niektorý z výrazov v zozname \{2 = 0, false, 2 &lt; 0} má hodnotu True.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
