---
title: Binary.From
---

# Binary.From


Creează o valoare binară din valoarea dată


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Returnează o valoare `binary` din `value` dată. Dacă `value` dată este `null`, `Binary.From` returnează `null`. Dacă `value` dată este `binary`, se returnează `value`. Valorile următoarelor tipuri pot fi convertite la o valoare `binary`:

-   `text`: o valoare `binary` din reprezentarea text. Pentru detalii, consultați `Binary.FromText`.

Dacă `value` este de orice alt tip, se returnează o eroare.


## Examples

### Example #1
Obţineţi valoarea `binary` a `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
