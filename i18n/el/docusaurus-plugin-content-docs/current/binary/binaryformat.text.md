---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Επιστρέφει μια δυαδική μορφή που διαβάζει μια τιμή κειμένου.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Επιστρέφει μια δυαδική μορφή που διαβάζει μια τιμή κειμένου. Το `length` καθορίζει τον αριθμό των byte προς αποκωδικοποίηση ή τη δυαδική μορφή του μήκους που προηγείται του κειμένου. Η προαιρετική τιμή `encoding` καθορίζει την κωδικοποίηση του κειμένου. Εάν το `encoding` δεν έχει καθοριστεί, τότε η κωδικοποίηση καθορίζεται από τα σημάδια σειράς byte Unicode. Εάν δεν υπάρχουν σημάδια σειράς byte, τότε χρησιμοποιείται το `TextEncoding.Utf8`.


## Examples

### Example #1
Αποκωδικοποίηση δύο byte ως κείμενο ASCII.
```powerquery
let
    binaryData = #binary({65, 66, 67}),
    textFormat = BinaryFormat.Text(2, TextEncoding.Ascii)
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```


### Example #2
Αποκωδικοποίηση κειμένου ASCII όπου το μήκος του κειμένου σε byte εμφανίζεται πριν από το κείμενο σε byte.
```powerquery
let
    binaryData = #binary({2, 65, 66}),
    textFormat = BinaryFormat.Text(
        BinaryFormat.Byte,
        TextEncoding.Ascii
    )
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```




## Category
Binary Formats.Reading text
