---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Καταργεί ένα εύρος χαρακτήρων και εισάγει μια νέα τιμή σε μια καθορισμένη θέση.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Επιστρέφει το αποτέλεσμα της κατάργησης ενός αριθμού χαρακτήρων, `count`, από την τιμή κειμένου `text` ξεκινώντας από τη θέση `offset` και εισαγάγοντας στη συνέχεια την τιμή κειμένου `newText` στην ίδια θέση του `text`.


## Examples

### Example #1
Αντικαταστήστε έναν χαρακτήρα στη θέση 2 της τιμής κειμένου "ABGF" με τη νέα τιμή κειμένου "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
