---
title: List.LastN
---

# List.LastN


## Description

Επιστρέφει την τελευταία τιμή της λίστας.  Μπορείτε να καθορίσετε προαιρετικά πόσες τιμές θα επιστραφούν ή μια κατάλληλη συνθήκη.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Επιστρέφει το τελευταίο στοιχείο της λίστας <code>list</code>. Εάν η λίστα είναι κενή, παρουσιάζεται εξαίρεση. Η συνάρτηση μπορεί να λάβει μια προαιρετική παράμετρο, <code>countOrCondition</code>, προκειμένου να υποστηρίξει τη συγκέντρωση πολλαπλών στοιχείων ή το φιλτράρισμα στοιχείων. Η <code>countOrCondition</code> μπορεί να καθοριστεί με τρεις τρόπους: <ul>  <li>Εάν καθοριστεί αριθμός, επιστρέφονται μέχρι τόσα στοιχεία. </li>  <li>Εάν καθοριστεί συνθήκη, επιστρέφονται όλα τα στοιχεία που ικανοποιούν αρχικά τη συνθήκη, αρχίζοντας από το τέλος της λίστας. Από τη στιγμή που ένα στοιχείο δεν ικανοποιεί τη συνθήκη, δεν εξετάζονται περαιτέρω στοιχεία. </li>  <li>Εάν αυτή η παράμετρος είναι null, επιστρέφεται το τελευταίο στοιχείο της λίστας.</li> </ul>


## Examples

### Example #1 
Βρείτε την τελευταία τιμή της λίστας \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Βρείτε τις τελευταίες τιμές της λίστας \{3, 4, 5, -1, 7, 8, 2} που είναι μεγαλύτερες του 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection