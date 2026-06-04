---
title: Text.PadEnd
---

# Text.PadEnd


Επιστρέφει κείμενο συγκεκριμένου μήκους συμπληρώνοντας το τέλος του παρεχόμενου κειμένου.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Επιστρέφει μια τιμή `text` συμπληρωμένη μέχρι το μήκος `count` εισάγοντας κενά διαστήματα στο τέλος της τιμής κειμένου `text`. Μπορεί να χρησιμοποιηθεί ένας προαιρετικός χαρακτήρας `character` για τον καθορισμό του χαρακτήρα που χρησιμοποιείται για συμπλήρωση. Ο προεπιλεγμένος χαρακτήρας συμπλήρωσης είναι το διάστημα.


## Examples

### Example #1
Συμπληρώστε το τέλος μιας τιμής κειμένου ώστε να έχει μήκος 10 χαρακτήρες.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2
Συμπληρώστε το τέλος μιας τιμής κειμένου με "|" ώστε να έχει μήκος 10 χαρακτήρες.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
