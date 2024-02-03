---
title: Binary.Compress
---

# Binary.Compress


## Description

Συμπιέζει μια δυαδική τιμή χρησιμοποιώντας τον δεδομένο τύπο συμπίεσης.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Συμπιέζει μια δυαδική τιμή χρησιμοποιώντας τον δεδομένο τύπο συμπίεσης. Το αποτέλεσμα αυτής της κλήσης είναι ένα συμπιεσμένο αντίγραφο των δεδομένων εισόδου. Οι τύποι συμπίεσης είναι:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Συμπιέζει τη δυαδική τιμή.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
