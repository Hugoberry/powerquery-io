---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Επιστρέφει μια δυαδική μορφή που επιλέγει την επόμενη δυαδική μορφή με βάση μια τιμή που έχει ήδη αναγνωστεί.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

Επιστρέφει μια δυαδική μορφή που επιλέγει την επόμενη δυαδική μορφή με βάση μια τιμή που έχει ήδη αναγνωστεί. Η τιμή της δυαδικής μορφής που παράγεται από αυτήν τη συνάρτηση λειτουργεί σε στάδια:

-   Η δυαδική μορφή που καθορίστηκε από την παράμετρο `binaryFormat` χρησιμοποιείται για να διαβάσει μια τιμή.
-   Η τιμή μεταβιβάζεται στη συνάρτηση επιλογής που καθορίστηκε από την παράμετρο `chooseFunction`.
-   Η συνάρτηση επιλογής ελέγχει την τιμή και επιστρέφει μια δεύτερη δυαδική μορφή.
-   Η δεύτερη δυαδική μορφή χρησιμοποιείται για να διαβάσει μια δεύτερη τιμή.
-   Εάν έχει καθοριστεί συνάρτηση συνδυασμού, τότε η πρώτη και η δεύτερη τιμή μεταβιβάζονται στη συνάρτηση συνδυασμού και επιστρέφεται η παραγόμενη τιμή.
-   Εάν δεν έχει καθοριστεί συνάρτηση συνδυασμού, επιστρέφεται η δεύτερη τιμή.
-   Επιστρέφεται η δεύτερη τιμή.

Η προαιρετική παράμετρος `type` υποδεικνύει τον τύπο της δυαδικής μορφής που θα επιστραφεί από τη συνάρτηση επιλογής. Είναι δυνατό να καθοριστεί `type any`, `type list` ή `type binary`. Εάν δεν έχει καθοριστεί η παράμετρος `type`, τότε χρησιμοποιείται η `type any`. Εάν χρησιμοποιείται `type list` ή `type binary`, τότε το σύστημα ενδέχεται να είναι σε θέση να επιστρέψει μια τιμή ροής `binary` ή `list` αντί για μια τιμή από το buffer, η οποία μπορεί να μειώσει την ποσότητα μνήμης που χρειάζεται για την ανάγνωση της μορφής.


## Examples

### Example #1
Ανάγνωση μιας λίστας από byte όπου ο αριθμός των στοιχείων προσδιορίζεται από το πρώτο byte.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2
Ανάγνωση μιας λίστας από byte όπου ο αριθμός των στοιχείων προσδιορίζεται από το πρώτο byte και διατήρηση του πρώτου byte που διαβάστηκε.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3
Ανάγνωση μιας λίστας από byte όπου ο αριθμός των στοιχείων προσδιορίζεται από το πρώτο byte με τη χρήση μιας λίστας ροής.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
