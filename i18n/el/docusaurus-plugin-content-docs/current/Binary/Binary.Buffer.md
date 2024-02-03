---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Αποθηκεύει στο buffer τη δυαδική τιμή της μνήμης.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Αποθηκεύει στο buffer τη δυαδική τιμή της μνήμης.  Το αποτέλεσμα αυτής της κλήσης είναι μια σταθερή δυαδική τιμή, δηλαδή μιας τιμής με ντετερμινιστικό μήκος και σειρά byte.


## Examples

### Example #1 
Δημιουργήστε μια σταθερή έκδοση της δυαδικής τιμής.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
