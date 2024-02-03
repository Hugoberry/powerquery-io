---
title: Binary.Split
---

# Binary.Split


## Description

Διαιρεί το καθορισμένο δυαδικό δεδομένο σε μια λίστα δυαδικών δεδομένων χρησιμοποιώντας το καθορισμένο μέγεθος σελίδας.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Διαιρεί <code>binary</code> σε μια λίστα δυαδικών δεδομένων όπου το πρώτο στοιχείο της λίστας εξόδου είναι ένα δυαδικό δεδομένο που περιέχει τα πρώτα <code>pageSize</code> byte από    δυαδικό δεδομένο προέλευσης, το επόμενο στοιχείο της λίστας εξόδου είναι ένα δυαδικό δεδομένο που περιέχει τα επόμενη <code>pageSize</code> byte από το δυαδικό αρχείο προέλευσης και ούτω καθεξής.



## Category
Binary
