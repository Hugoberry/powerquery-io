---
title: List.AllTrue
---

# List.AllTrue


## Description

Επιστρέφει true εάν και οι δύο παραστάσεις είναι true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Επιστρέφει true εάν όλες οι παραστάσεις στη λίστα <code>list</code> είναι true.


## Examples

### Example #1 
Προσδιορίστε εάν όλες οι παραστάσεις στη λίστα \{true, true, 2 &gt; 0} είναι true.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Προσδιορίστε εάν όλες οι παραστάσεις στη λίστα \{true, true, 2 &lt; 0} είναι true.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
