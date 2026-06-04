---
title: Text.Replace
---

# Text.Replace


Αντικαθιστά όλες τις εμφανίσεις της παρεχόμενης συμβολοσειράς στο κείμενο.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Επιστρέφει το αποτέλεσμα της αντικατάστασης όλων των εμφανίσεων της τιμής κειμένου `old` στην τιμή κειμένου `text` με την τιμή κειμένου `new`. Αυτή η συνάρτηση κάνει διάκριση πεζών-κεφαλαίων.


## Examples

### Example #1
Αντικαταστήστε κάθε εμφάνιση του "the" σε μια πρόταση με το "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
