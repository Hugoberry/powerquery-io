---
title: Text.Remove
---

# Text.Remove


Καταργεί όλες τις εμφανίσεις του παρεχόμενου χαρακτήρα ή λίστας χαρακτήρων από την τιμή κειμένου εισόδου.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Επιστρέφει ένα αντίγραφο της τιμής κειμένου `text` έχοντας καταργήσει όλους τους χαρακτήρες από τη `removeChars`.


## Examples

### Example #1
Καταργήστε τους χαρακτήρες , και ; από την τιμή κειμένου.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
