---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Vrátí přibližnou délku binárního souboru.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Vrátí přibližnou délku `binary` nebo chybu, pokud zdroj dat nepodporuje přibližnou délku.


## Examples

### Example #1
Načte přibližnou délku binární hodnoty.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
