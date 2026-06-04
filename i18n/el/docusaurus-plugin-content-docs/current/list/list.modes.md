---
title: List.Modes
---

# List.Modes


Επιστρέφει μια λίστα με τις συχνότερες τιμές της λίστας.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Επιστρέφει τα στοιχεία που εμφανίζονται συχνότερα σε `list`. Αν η λίστα είναι κενή, προκύπτει σφάλμα. Αν εμφανίζονται πολλά στοιχεία με την ίδια μέγιστη συχνότητα, επιστρέφονται όλα. Μια προαιρετική τιμή κριτηρίων σύγκρισης, `equationCriteria`, μπορεί να καθοριστεί για τον έλεγχο της δοκιμής ισότητας.


## Examples

### Example #1
Βρείτε τα στοιχεία που εμφανίζονται συχνότερα στη λίστα `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
