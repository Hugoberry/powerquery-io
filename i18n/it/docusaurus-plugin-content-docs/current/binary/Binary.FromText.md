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

Restituisce il risultato della conversione del valore di testo <code>text</code> in un binario (elenco di <code>number</code>). È possibile specificare <code>encoding</code> per indicare la codifica usata nel valore di testo.      I valori seguenti di <code>BinaryEncoding</code> possono essere usati per <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codifica Base 64</li>        <li><code>BinaryEncoding.Hex</code>: codifica esadecimale</li>      </ul>


## Examples

### Example #1 
Decodificare &#34;1011&#34; in binario.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Decodificare &#34;1011&#34; in binario con codifica esadecimale.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
