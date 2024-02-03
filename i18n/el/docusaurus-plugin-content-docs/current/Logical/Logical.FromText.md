---
title: Logical.FromText
---

# Logical.FromText


## Description

Δημιουργεί μια λογική τιμή από τις τιμές κειμένου &#34;true&#34; και &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Δημιουργεί μια λογική τιμή από την τιμή κειμένου <code>text</code>, "true" ή "false". Εάν η λίστα <code>text</code> περιέχει διαφορετική συμβολοσειρά, παρουσιάζεται εξαίρεση. Η τιμή κειμένου <code>text</code> δεν κάνει διάκριση πεζών-κεφαλαίων.


## Examples

### Example #1 
Δημιουργήστε μια λογική τιμή από τη συμβολοσειρά κειμένου &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Δημιουργήστε μια λογική τιμή από τη συμβολοσειρά κειμένου &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
