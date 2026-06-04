---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Επιστρέφει μια δυαδική μορφή που θα μετασχηματίσει τις τιμές που διαβάζονται από μια άλλη δυαδική μορφή.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Επιστρέφει μια δυαδική μορφή που θα μετασχηματίσει τις τιμές που διαβάζονται από μια άλλη δυαδική μορφή. Η παράμετρος `binaryFormat` καθορίζει τη δυαδική μορφή που θα χρησιμοποιηθεί για να διαβάσει την τιμή. Η `function` καλείται με την τιμή που διαβάστηκε και επιστρέφει τη μετασχηματισμένη τιμή.


## Examples

### Example #1
Ανάγνωση ενός byte και πρόσθεση ενός σε αυτό.
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
