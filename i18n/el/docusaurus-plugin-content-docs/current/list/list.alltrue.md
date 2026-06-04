---
title: List.AllTrue
---

# List.AllTrue


Επιστρέφει true εάν και οι δύο παραστάσεις είναι true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Επιστρέφει true εάν όλες οι παραστάσεις στη λίστα `list` είναι true.


## Examples

### Example #1
Προσδιορίστε εάν όλες οι παραστάσεις στη λίστα \{true, true, 2 > 0\} είναι true.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2
Προσδιορίστε εάν όλες οι παραστάσεις στη λίστα \{true, true, 2 &lt; 0\} είναι true.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
