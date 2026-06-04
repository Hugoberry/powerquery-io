---
title: Binary.From
---

# Binary.From


Kreira binarnu vrednost od date vrednosti


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Vraća `Binary` vrednost od datog `value`. Ako dati `value` predstavlja `null`, `Binary.From` vraća `null`. Ako je `value` `binary` vrednost, vraća se `value`. Vrednosti sledećih tipova mogu se konvertovati u `binary` vrednost:

-   `text`: `Binary` vrednost iz tekstualne reprezentacije. Pogledajte `Binary.FromText` za detalje.

Ako je `value` nekog drugog tipa, vraća se greška.


## Examples

### Example #1
Dobijanje `binary` vrednosti za `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
