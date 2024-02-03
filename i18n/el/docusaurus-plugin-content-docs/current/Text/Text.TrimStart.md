---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Καταργεί όλα τα αρχικά κενά διαστήματα.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Επιστρέφει το αποτέλεσμα της κατάργησης όλων των αρχικών κενών διαστημάτων από την τιμή κειμένου <code>text</code>.


## Examples

### Example #1 
Καταργήστε όλα τα αρχικά κενά διαστήματα από το &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
