---
title: List.Split
---

# List.Split


## Description

Διαιρεί την καθορισμένη λίστα σε μια λίστα με λίστες χρησιμοποιώντας το καθορισμένο μέγεθος σελίδας.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Διαιρεί <code>list</code> σε μια λίστα λιστών όπου το πρώτο στοιχείο της λίστας εξόδου είναι μια λίστα που περιέχει τα πρώτα στοιχεία <code>pageSize</code> από    τη λίστα προέλευσης, το επόμενο στοιχείο της λίστας εξόδου είναι μια λίστα που περιέχει τα επόμενα στοιχεία <code>pageSize</code> από τη λίστα προέλευσης,  και ούτω καθεξής.



## Category
List.Transformation functions
