---
title: Text.Replace
---

# Text.Replace


## Description

Αντικαθιστά όλες τις εμφανίσεις της παρεχόμενης συμβολοσειράς στο κείμενο.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Επιστρέφει το αποτέλεσμα της αντικατάστασης όλων των εμφανίσεων της τιμής κειμένου <code>old</code> στην τιμή κειμένου <code>text</code> με την τιμή κειμένου <code>new</code>. Αυτή η συνάρτηση κάνει διάκριση πεζών-κεφαλαίων.


## Examples

### Example #1 
Αντικαταστήστε κάθε εμφάνιση του &#34;the&#34; σε μια πρόταση με το &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
