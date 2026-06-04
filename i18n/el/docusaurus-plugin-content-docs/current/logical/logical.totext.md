---
title: Logical.ToText
---

# Logical.ToText


Επιστρέφει το κείμενο "true" ή "false" δοθείσης μιας λογικής τιμής.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Δημιουργεί μια τιμή κειμένου από τη λογική τιμή `logicalValue`, `true` ή `false`. Αν `logicalValue` δεν είναι λογική τιμή, προκύπτει σφάλμα.


## Examples

### Example #1
Δημιουργήστε μια τιμή κειμένου από τη λογική τιμή `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
