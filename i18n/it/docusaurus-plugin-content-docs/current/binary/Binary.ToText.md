---
title: Binary.ToText
---

# Binary.ToText


Codifica i dati binari in un formato di testo.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Restituisce il risultato della conversione di un elenco binario di numeri <code>binary</code> in un valore di testo. Facoltativamente, è possibile specificare <code>encoding</code> per indicare la codifica da usare nel valore di testo ottenuto      I valori seguenti di <code>BinaryEncoding</code> possono essere usati per <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codifica Base 64</li>        <li><code>BinaryEncoding.Hex</code>: codifica esadecimale</li>      </ul>



## Category
Binary
