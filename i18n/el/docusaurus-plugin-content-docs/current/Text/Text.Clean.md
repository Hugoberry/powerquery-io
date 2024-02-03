---
title: Text.Clean
---

# Text.Clean


## Description

Επιστρέφει την τιμή κειμένου έχοντας καταργήσει όλους τους χαρακτήρες ελέγχου.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Επιστρέφει μια τιμή κειμένου έχοντας καταργήσει όλους τους χαρακτήρες ελέγχου του <code>text</code>.


## Examples

### Example #1 
Καταργεί τις αλλαγές γραμμών και τους άλλους χαρακτήρες ελέγχου από μια τιμή κειμένου.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
