---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Επιστρέφει μια λίστα τιμών κειμένου, η οποία έχει διαιρεθεί με οποιονδήποτε χαρακτήρα του οριοθέτη.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Επιστρέφει μια λίστα τιμών κειμένου η οποία προκύπτει από τη διαίρεση μιας τιμής κειμένου <code>text</code> με βάση οποιονδήποτε χαρακτήρα του καθορισμένου οριοθέτη, <code>separators</code>.


## Examples

### Example #1 
Δημιουργήστε μια λίστα από την τιμή κειμένου &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
