---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Επιστρέφει μια δυαδική μορφή που περιορίζει την ποσότητα των δεδομένων που μπορούν να αναγνωστούν.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Επιστρέφει μια δυαδική μορφή που περιορίζει τον όγκο των δεδομένων που μπορούν να διαβαστούν. Τόσο το <code>BinaryFormat.List</code> και το <code>BinaryFormat.Binary</code> μπορούν να χρησιμοποιηθούν για ανάγνωση μέχρι το τέλος των δεδομένων. Το <code>BinaryFormat.Length</code> μπορεί να χρησιμοποιηθεί για τον περιορισμό του αριθμού των byte που διαβάζονται. Η παράμετρος <code>binaryFormat</code> καθορίζει τη δυαδική μορφή που θα περιοριστεί.  Η παράμετρος <code>length</code> καθορίζει τον αριθμό των byte προς ανάγνωση. Η παράμετρος <code>length</code> μπορεί να είναι είτε μια αριθμητική τιμή είτε μια τιμή δυαδικής μορφής που καθορίζει τη μορφή της τιμής μήκους που εμφανίζεται και προηγείται της τιμής που διαβάζεται.


## Examples

### Example #1 
Περιορίστε τον αριθμό των byte που διαβάζονται σε 2 κατά την ανάγνωση μιας λίστας byte.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Περιορισμός του αριθμού των byte που διαβάζονται κατά την ανάγνωση μιας λίστας byte στην τιμή byte που προηγείται της λίστας.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
