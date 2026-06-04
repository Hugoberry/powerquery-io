---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Returnează lungimea aproximativă a codului binar.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Returnează lungimea aproximativă de `binary`sau o eroare dacă sursa de date nu acceptă o lungime aproximativă.


## Examples

### Example #1
Obțineți lungimea aproximativă a valorii binare.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
