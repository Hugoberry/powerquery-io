---
title: List.Select
---

# List.Select


## Description

Επιστρέφει μια λίστα τιμών που ικανοποιούν τη συνθήκη.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Επιστρέφει μια λίστα των τιμών από τη λίστα <code>list</code>, οι οποίες ικανοποιούν τη συνθήκη επιλογής <code>selection</code>.


## Examples

### Example #1 
Βρείτε τις τιμές της λίστας \{1, -3, 4, 9, -2} που είναι μεγαλύτερες του 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
