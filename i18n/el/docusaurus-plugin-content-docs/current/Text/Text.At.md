---
title: Text.At
---

# Text.At


## Description

Επιστρέφει τον χαρακτήρα στη συγκεκριμένη θέση.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Επιστρέφει τον χαρακτήρα της τιμής κειμένου, <code>text</code> στη θέση <code>index</code>. Ο πρώτος χαρακτήρας του κειμένου είναι στη θέση 0.


## Examples

### Example #1 
Βρείτε τον χαρακτήρα στη θέση 4 της συμβολοσειράς &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
