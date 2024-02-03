---
title: Text.Split
---

# Text.Split


## Description

Διαιρεί το κείμενο μιας λίστας τιμών κειμένου με βάση έναν καθορισμένο οριοθέτη.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Επιστρέφει μια λίστα τιμών κειμένου που προκύπτει από τη διαίρεση μιας τιμής κειμένου <code>text</code> σύμφωνα με τον καθορισμένο οριοθέτη, <code>separator</code>.


## Examples

### Example #1 
Δημιουργήστε μια λίστα από την οριοθετημένη με &#34;|&#34; τιμή κειμένου &#34;Name|Address|PhoneNumber&#34;.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations
