---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Επιστρέφει το κατά προσέγγιση μήκος του δυαδικού.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Επιστρέφει το κατά προσέγγιση μήκος του <code>binary</code>ή ένα σφάλμα εάν η προέλευση δεδομένων δεν υποστηρίζει κατά προσέγγιση μήκος.


## Examples

### Example #1 
Λάβετε το κατά προσέγγιση μήκος της δυαδικής τιμής.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
