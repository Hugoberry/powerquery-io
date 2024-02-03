---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Επιστρέφει true εάν οποιαδήποτε από τις παραστάσεις είναι true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Επιστρέφει true εάν οποιαδήποτε από τις παραστάσεις στη λίστα <code>list</code> είναι true.


## Examples

### Example #1 
Προσδιορίστε εάν οποιαδήποτε από τις παραστάσεις στη λίστα \{true, false, 2 &gt; 0} είναι true.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Προσδιορίστε εάν οποιαδήποτε από τις παραστάσεις στη λίστα \{2 = 0, false, 2 &lt; 0} είναι true.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
