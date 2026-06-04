---
title: Text.SplitAny
---

# Text.SplitAny


Επιστρέφει μια λίστα τιμών κειμένου, η οποία έχει διαιρεθεί με οποιονδήποτε χαρακτήρα του οριοθέτη.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Επιστρέφει μια λίστα τιμών κειμένου που προκύπτει από τη διαίρεση μιας τιμής κειμένου με βάση οποιονδήποτε χαρακτήρα καθορίζεται στον οριοθέτη.

-   `text`: Η τιμή κειμένου που θα διαιρεθεί.
-   `separators`: Οι χαρακτήρες οριοθέτη που χρησιμοποιούνται για τη διαίρεση του κειμένου.


## Examples

### Example #1
Δημιουργεί μια λίστα από το δεδομένο κείμενο χρησιμοποιώντας τους καθορισμένους χαρακτήρες οριοθέτη.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
