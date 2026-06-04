---
title: Binary.Decompress
---

# Binary.Decompress


Αποσυμπιέζει μια δυαδική τιμή χρησιμοποιώντας τον τύπο συμπίεσης που δόθηκε.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Αποσυμπιέζει μια δυαδική τιμή χρησιμοποιώντας τον τύπο συμπίεσης που δόθηκε. Το αποτέλεσμα αυτής της κλήσης είναι ένα αποσυμπιεσμένο αντίγραφο των δεδομένων εισόδου. Οι τύποι συμπίεσης περιλαμβάνουν:

-   `Compression.GZip`
-   `Compression.Deflate`


## Examples

### Example #1
Αποσυμπιέζει τη δυαδική τιμή.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
