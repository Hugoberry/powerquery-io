---
title: Logical.FromText
---

# Logical.FromText


Δημιουργεί μια λογική τιμή από τις τιμές κειμένου "true" και "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Δημιουργεί μια λογική τιμή από την τιμή κειμένου `text`, "true" ή "false". Αν `text` περιέχει διαφορετική συμβολοσειρά, προκύπτει σφάλμα. Η τιμή κειμένου `text` δεν κάνει διάκριση πεζών-κεφαλαίων.


## Examples

### Example #1
Δημιουργήστε μια λογική τιμή από τη συμβολοσειρά κειμένου "true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Δημιουργήστε μια λογική τιμή από τη συμβολοσειρά κειμένου "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
