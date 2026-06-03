---
title: Binary.FromText
---

# Binary.FromText


Decodifica i dati da un formato di testo in binario.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Restituisce il risultato della conversione del valore di testo `text` in un binario (elenco di `number`). È possibile specificare `encoding` per indicare la codifica usata nel valore di testo. I valori seguenti di `BinaryEncoding` possono essere usati per `encoding`.

-   `BinaryEncoding.Base64`: codifica Base 64
-   `BinaryEncoding.Hex`: codifica esadecimale


## Examples

### Example #1
Decodificare "1011" in binario.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Decodificare "1011" in binario con codifica esadecimale.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
