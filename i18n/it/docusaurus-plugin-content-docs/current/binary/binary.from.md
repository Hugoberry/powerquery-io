---
title: Binary.From
---

# Binary.From


Crea un binario dal valore specificato


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Restituisce un valore `binario` dal dato `value`. Se il dato `value` è `null`, `Binary.From` restituisce `null`. Se il dato `value` è `binario`, viene restituito `value`. I valori dei tipi seguenti possono essere convertiti in un valore `binario`:

-   `testo`: Un valore `binario` dalla rappresentazione di testo. Per ulteriori informazioni, fare riferimento a `Binary.FromText`.

Se `value` è di altro tipo, viene restituito un errore.


## Examples

### Example #1
Ottenere il valore `binary` di `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
