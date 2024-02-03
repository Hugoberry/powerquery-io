---
title: Text.Trim
---

# Text.Trim


## Description

Καταργεί όλα τα αρχικά και τελικά κενά διαστήματα.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Επιστρέφει το αποτέλεσμα της κατάργησης όλων των αρχικών και τελικών κενών διαστημάτων από την τιμή κειμένου <code>text</code>.


## Examples

### Example #1 
Καταργεί όλα τα αρχικά και τελικά κενά διαστήματα από το &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
