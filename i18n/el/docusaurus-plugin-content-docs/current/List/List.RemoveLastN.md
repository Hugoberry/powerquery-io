---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Επιστρέφει μια λίστα που καταργεί τον καθορισμένο αριθμό στοιχείων από το τέλος της λίστας.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Επιστρέφει μια λίστα που καταργεί τα τελευταία <code>countOrCondition</code> στοιχεία από το τέλος της λίστας <code>list</code>. Εάν η λίστα <code>list</code> έχει λιγότερα από <code>countOrCondition</code> στοιχεία, επιστρέφεται μια κενή λίστα. <ul> <li>Εάν καθοριστεί αριθμός, καταργούνται μέχρι τόσα στοιχεία. </li> <li>Εάν καθοριστεί συνθήκη, η λίστα που επιστρέφεται τελειώνει με το πρώτο στοιχείο από το τέλος της λίστας <code>list</code> που ικανοποιεί τα κριτήρια. Από τη στιγμή που ένα στοιχείο δεν ικανοποιεί τη συνθήκη, δεν εξετάζονται περαιτέρω στοιχεία. </li> <li>Εάν αυτή η παράμετρος είναι null, καταργείται μόνο ένα στοιχείο. </li> </ul>


## Examples

### Example #1 
Δημιουργήστε μια λίστα από τη λίστα \{1, 2, 3, 4, 5} χωρίς τους τελευταίους 3 αριθμούς.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Δημιουργήστε μια λίστα από τη λίστα \{5, 4, 2, 6, 4} που τελειώνει με αριθμό μικρότερο του 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
