---
title: BinaryFormat.List
---

# BinaryFormat.List


Επιστρέφει μια δυαδική μορφή που διαβάζει μια ακολουθία στοιχείων και επιστρέφει μια λίστα.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Επιστρέφει μια δυαδική μορφή που διαβάζει μια ακολουθία στοιχείων και επιστρέφει μια `list`. Η `binaryFormat` παράμετρος καθορίζει τη δυαδική μορφή κάθε στοιχείου. Υπάρχουν τρεις τρόποι για να προσδιορίσετε τον αριθμό των στοιχείων που διαβάζονται:

-   Εάν το `countOrCondition` δεν έχει καθοριστεί, τότε η δυαδική μορφή θα διαβάζεται μέχρι να μην υπάρχουν άλλα στοιχεία.
-   Εάν το `countOrCondition` είναι αριθμός, τότε η δυαδική μορφή θα διαβάσει τόσα στοιχεία.
-   Εάν το `countOrCondition` είναι συνάρτηση, τότε αυτή η συνάρτηση θα καλείται για κάθε αντικείμενο που διαβάζεται. Η συνάρτηση επιστρέφει true για να συνεχίσει και false για διακοπή της ανάγνωσης στοιχείων. Το τελικό στοιχείο περιλαμβάνεται στη λίστα.
-   Εάν το `countOrCondition` είναι δυαδική μορφή, τότε ο αριθμός των στοιχείων αναμένεται να προηγείται της λίστας και η καθορισμένη μορφή χρησιμοποιείται για την ανάγνωση της καταμέτρησης.


## Examples

### Example #1
Ανάγνωση byte μέχρι τέλους των δεδομένων.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Ανάγνωση δύο byte.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3
Ανάγνωση byte έως ότου η τιμή byte να είναι μεγαλύτερη ή ίση του δύο.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
