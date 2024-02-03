---
title: Text.ToList
---

# Text.ToList


## Description

Επιστρέφει μια λίστα τιμών χαρακτήρων από την παρεχόμενη τιμή κειμένου.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Επιστρέφει μια λίστα τιμών χαρακτήρων από την παρεχόμενη τιμή κειμένου <code>text</code>.


## Examples

### Example #1 
Δημιουργήστε μια λίστα τιμών χαρακτήρων από το κείμενο &#34;Hello World&#34;.
```powerquery
Text.ToList("Hello World")
```

Result: 
```powerquery
{
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d"
}
```




## Category
Text.Conversions from and to text
