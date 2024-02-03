---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Επιστρέφει κείμενο συγκεκριμένου μήκους συμπληρώνοντας το τέλος του παρεχόμενου κειμένου.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Επιστρέφει μια τιμή <code>text</code> συμπληρωμένη μέχρι το μήκος <code>count</code> εισάγοντας κενά διαστήματα στο τέλος της τιμής κειμένου <code>text</code>.    Μπορεί να χρησιμοποιηθεί ένας προαιρετικός χαρακτήρας <code>character</code> για τον καθορισμό του χαρακτήρα που χρησιμοποιείται για συμπλήρωση. Ο προεπιλεγμένος χαρακτήρας συμπλήρωσης είναι το διάστημα.


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
Συμπληρώστε το τέλος μιας τιμής κειμένου με &#34;|&#34; ώστε να έχει μήκος 10 χαρακτήρες.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
