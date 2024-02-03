---
title: List.FirstN
---

# List.FirstN


## Description

Επιστρέφει το πρώτο σύνολο στοιχείων της λίστας καθορίζοντας πόσα στοιχεία θα επιστραφούν ή μια κατάλληλη συνθήκη.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Εάν καθοριστεί αριθμός, επιστρέφονται μέχρι τόσα στοιχεία. </li>  <li>Εάν καθοριστεί συνθήκη, επιστρέφονται όλα τα στοιχεία που ικανοποιούν αρχικά τη συνθήκη. Από τη στιγμή που ένα στοιχείο δεν ικανοποιεί τη συνθήκη, δεν εξετάζονται περαιτέρω στοιχεία. </li> </ul>


## Examples

### Example #1 
Βρείτε τις αρχικές τιμές της λίστας \{3, 4, 5, -1, 7, 8, 2} που είναι μεγαλύτερες του 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection