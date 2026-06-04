---
title: Text.Select
---

# Text.Select


Καταργεί όλες τις εμφανίσεις του δεδομένου χαρακτήρα ή λίστας χαρακτήρων από την τιμή κειμένου εισόδου.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Επιστρέφει ένα αντίγραφο της τιμής κειμένου `text` έχοντας καταργήσει όλους τους χαρακτήρες που δεν περιέχονται στο `selectChars`.


## Examples

### Example #1
Επιλέξτε όλους τους χαρακτήρες στην περιοχή από "a" έως "z" από την τιμή κειμένου.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
