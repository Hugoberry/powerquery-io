---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Returnerar true om ett uttryck utvärderas som true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Returnerar true om något av uttrycken i listan <code>list</code> utvärderas som true.


## Examples

### Example #1 
Kontrollera om något av uttrycken i listan \{true, false, 2 &gt; 0} utvärderas som true.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollera om något av uttrycken i listan \{2 = 0, false, 2 &lt; 0} utvärderas som true.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
