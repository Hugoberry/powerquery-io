---
title: List.RemoveLastN
---

# List.RemoveLastN


Επιστρέφει μια λίστα που καταργεί τον καθορισμένο αριθμό στοιχείων από το τέλος της λίστας.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Επιστρέφει μια λίστα που καταργεί τα τελευταία `countOrCondition` στοιχεία από το τέλος της λίστας `list`. Εάν `list` έχει λιγότερα από `countOrCondition` στοιχεία, επιστρέφεται μια κενή λίστα.

-   Εάν έχει καθοριστεί ένας αριθμός, καταργούνται έως και πολλά στοιχεία.
-   Εάν καθοριστεί μια συνθήκη, καταργούνται τυχόν διαδοχικά στοιχεία που ταιριάζουν στο τέλος του `list` .
-   Εάν αυτή η παράμετρος είναι null, καταργείται μόνο ένα στοιχείο.


## Examples

### Example #1
Δημιουργήστε μια λίστα από τη λίστα \{1, 2, 3, 4, 5\} χωρίς τους τελευταίους 3 αριθμούς.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Δημιουργήστε μια λίστα από τη λίστα \{5, 4, 2, 6, 4\} που τελειώνει με αριθμό μικρότερο του 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
