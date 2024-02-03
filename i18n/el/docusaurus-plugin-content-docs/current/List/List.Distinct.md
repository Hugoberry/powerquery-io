---
title: List.Distinct
---

# List.Distinct


## Description

Επιστρέφει μια λίστα τιμών από την οποία έχουν αφαιρεθεί οι διπλότυπες τιμές.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Επιστρέφει μια λίστα που οποίος περιέχει όλες τις τιμές της λίστας <code>list</code> από τις οποίες έχουν αφαιρεθεί οι διπλότυπες τιμές. Εάν η λίστα είναι κενή, το αποτέλεσμα είναι μια κενή λίστα.


## Examples

### Example #1 
Καταργήστε τις διπλότυπες τιμές από τη λίστα \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
