---
title: List.AnyTrue
---

# List.AnyTrue


Palauttaa arvon true, jos millä tahansa lausekkeella on arvo true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Palauttaa arvon true, jos millä tahansa luettelon `list` lausekkeella on arvo true.


## Examples

### Example #1
Selvitä, onko millään lausekkeella arvo true luettelossa \{true, false, 2 > 0\}.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2
Selvitä, onko millään lausekkeella arvo true luettelossa \{2 = 0, false, 2 &lt; 0\}.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
