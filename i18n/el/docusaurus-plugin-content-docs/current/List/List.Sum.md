---
title: List.Sum
---

# List.Sum


## Description

Επιστρέφει το άθροισμα όλων των στοιχείων της λίστας.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Επιστρέφει το άθροισμα των αριθμών της λίστας, <code>list</code>, που δεν είναι null.  Επιστρέφει την τιμή null εάν δεν υπάρχουν τιμές στη λίστα που δεν είναι null.


## Examples

### Example #1 
Βρείτε το άθροισμα των αριθμών της λίστας &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
