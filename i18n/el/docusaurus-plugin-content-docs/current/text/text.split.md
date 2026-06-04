---
title: Text.Split
---

# Text.Split


Διαιρεί το κείμενο μιας λίστας τιμών κειμένου με βάση έναν καθορισμένο οριοθέτη.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Επιστρέφει μια λίστα τιμών κειμένου που προκύπτει από τη διαίρεση μιας τιμής κειμένου με βάση τον καθορισμένο οριοθέτη.

-   `text`: Η τιμή κειμένου που θα διαιρεθεί.
-   `separator`: Ο οριοθέτης που χρησιμοποιείται για τη διαίρεση του κειμένου. Ο οριοθέτης μπορεί να είναι ένας χαρακτήρας ή μια ακολουθία χαρακτήρων. Αν χρησιμοποιείται μια ακολουθία χαρακτήρων, το κείμενο διαιρείται μόνο σε παρουσίες όπου παρουσιάζεται η ακριβής ακολουθία.


## Examples

### Example #1
Δημιουργήστε μια λίστα από την οριοθετημένη με "|" τιμή κειμένου "Name|Address|PhoneNumber".
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


### Example #2
Δημιουργεί μια λίστα από την τιμή κειμένου χρησιμοποιώντας μια ακολουθία χαρακτήρων.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
