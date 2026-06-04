---
title: Text.ToList
---

# Text.ToList


Επιστρέφει μια λίστα τιμών χαρακτήρων από την παρεχόμενη τιμή κειμένου.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Επιστρέφει μια λίστα τιμών χαρακτήρων από την παρεχόμενη τιμή κειμένου `text`.


## Examples

### Example #1
Δημιουργήστε μια λίστα τιμών χαρακτήρων από το κείμενο "Hello World".
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
