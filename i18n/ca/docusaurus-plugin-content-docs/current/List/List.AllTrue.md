---
title: List.AllTrue
---

# List.AllTrue


## Description

Retorna si totes les expressions tenen el valor true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Retorna el valor true si totes les expressions de la llista <code>list</code> tenen el valor true.


## Examples

### Example #1 
Determina si totes les expressions de la llista \{true, true, 2 &gt; 0} tenen el valor true.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Determina si totes les expressions de la llista \{true, true, 2 &lt; 0} tenen el valor true.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
