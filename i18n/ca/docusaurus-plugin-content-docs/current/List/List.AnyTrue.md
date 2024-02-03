---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Retorna el valor true si qualsevol de les expressions té el valor true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Retorna el valor true si qualsevol expressió de la llista <code>list</code> té el valor true.


## Examples

### Example #1 
Determina si qualsevol de les expressions de la llista \{true, false, 2 &gt; 0} té el valor true.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Determina si qualsevol de les expressions de la llista \{2 = 0, false, 2 &lt; 0} té el valor true.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
