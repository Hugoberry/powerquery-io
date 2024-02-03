---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Καταργεί όλα τα τελικά κενά διαστήματα.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Επιστρέφει το αποτέλεσμα της κατάργησης όλων των τελικών κενών διαστημάτων από την τιμή κειμένου <code>text</code>.


## Examples

### Example #1 
Καταργήστε όλα τα τελικά κενά διαστήματα από το &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
