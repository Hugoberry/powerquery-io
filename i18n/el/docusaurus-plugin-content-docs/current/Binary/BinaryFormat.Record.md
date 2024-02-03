---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Επιστρέφει μια δυαδική μορφή που διαβάζει μια εγγραφή.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Επιστρέφει μια δυαδική μορφή που διαβάζει μια εγγραφή.  Η παράμετρος <code>record</code> καθορίζει τη μορφή αυτής της εγγραφής.  Κάθε πεδίο στην εγγραφή μπορεί να έχει διαφορετική δυαδική μορφή.  Εάν ένα πεδίο περιέχει μια τιμή που δεν είναι τιμή δυαδικής μορφής, δεν διαβάζονται δεδομένα για αυτό το πεδίο και η τιμή πεδίου απηχείται στο αποτέλεσμα.


## Examples

### Example #1 
Ανάγνωση μιας εγγραφής που περιέχει έναν ακέραιο 16 bit και έναν ακέραιο 32 bit.
```powerquery
let
    binaryData = #binary({
        0x00, 0x01,
        0x00, 0x00, 0x00, 0x02
    }),
    recordFormat = BinaryFormat.Record([
        A = BinaryFormat.UnsignedInteger16,
        B = BinaryFormat.UnsignedInteger32
    ])
in
    recordFormat(binaryData)
```

Result: 
```powerquery
[A = 1, B = 2]
```




## Category
Binary Formats.Reading records
