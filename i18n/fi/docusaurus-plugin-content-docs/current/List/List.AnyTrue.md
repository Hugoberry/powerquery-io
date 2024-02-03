---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Palauttaa arvon true, jos millä tahansa lausekkeella on arvo true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Palauttaa arvon true, jos millä tahansa luettelon <code>list</code> lausekkeella on arvo true.


## Examples

### Example #1 
Selvitä, onko millään lausekkeella arvo true luettelossa \{true, false, 2 &gt; 0}.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Selvitä, onko millään lausekkeella arvo true luettelossa \{2 = 0, false, 2 &lt; 0}.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
