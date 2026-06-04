---
title: Text.RemoveRange
---

# Text.RemoveRange


Καταργεί ένα πλήθος χαρακτήρων ξεκινώντας από την παρεχόμενη απόκλιση.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Επιστρέφει ένα αντίγραφο της τιμής κειμένου `text` έχοντας καταργήσει όλους τους χαρακτήρες από τη θέση `offset`. Μπορεί να συμπεριληφθεί μια προαιρετική παράμετρος, `count`, για τον καθορισμό του αριθμού των χαρακτήρων που θα καταργηθούν. Η προεπιλεγμένη τιμή της παραμέτρου `count` είναι 1. Οι τιμές θέσης ξεκινούν από το 0.


## Examples

### Example #1
Καταργήστε 1 χαρακτήρα από την τιμή κειμένου "ABEFC" στη θέση 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Καταργήστε δύο χαρακτήρες από την τιμή κειμένου "ABEFC" ξεκινώντας από τη θέση 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
