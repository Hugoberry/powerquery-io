---
title: List.Mode
---

# List.Mode


Επιστρέφει την πιο συχνή τιμή της λίστας.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Επιστρέφει το στοιχείο που εμφανίζεται συχνότερα στο `list`. Αν η λίστα είναι κενή, προκύπτει σφάλμα. Αν εμφανίζονται πολλά στοιχεία με την ίδια μέγιστη συχνότητα, επιλέγεται το τελευταίο. Μια προαιρετική τιμή κριτηρίων σύγκρισης, `equationCriteria`, μπορεί να καθοριστεί για τον έλεγχο της δοκιμής ισότητας.


## Examples

### Example #1
Βρείτε το στοιχείο που εμφανίζεται συχνότερα στη λίστα `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Βρείτε το στοιχείο που εμφανίζεται συχνότερα στη λίστα `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
