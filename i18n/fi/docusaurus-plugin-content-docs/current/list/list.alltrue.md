---
title: List.AllTrue
---

# List.AllTrue


Palauttaa arvon true, jos kaikilla lausekkeilla on arvo true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Palauttaa arvon true, jos kaikilla lausekkeilla on arvo true luettelossa `list`.


## Examples

### Example #1
Selvitä, onko kaikilla lausekkeilla arvo true luettelossa \{true, true, 2 > 0\}.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2
Selvitä, onko kaikilla lausekkeilla arvo true luettelossa \{true, true, 2 &lt; 0\}.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
