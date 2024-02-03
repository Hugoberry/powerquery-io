---
title: List.AllTrue
---

# List.AllTrue


## Description

Returnerar true om alla uttryck utvärderas som true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Returnerar true om alla uttryck i listan <code>list</code> utvärderas som true.


## Examples

### Example #1 
Kontrollera om alla uttrycken i listan \{true, true, 2 &gt; 0} utvärderas som true.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollera om alla uttrycken i listan \{true, true, 2 &lt; 0} utvärderas som true.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
