---
title: Text.At
---

# Text.At


Επιστρέφει τον χαρακτήρα στη συγκεκριμένη θέση.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Επιστρέφει τον χαρακτήρα της τιμής κειμένου, `text` στη θέση `index`. Ο πρώτος χαρακτήρας του κειμένου είναι στη θέση 0.


## Examples

### Example #1
Βρείτε τον χαρακτήρα στη θέση 4 της συμβολοσειράς "Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
