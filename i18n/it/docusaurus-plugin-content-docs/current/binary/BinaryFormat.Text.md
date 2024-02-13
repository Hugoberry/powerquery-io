---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Restituisce un formato binario che legge un valore di testo.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Restituisce un formato binario che legge un valore di testo.  L'elemento <code>length</code> specifica il numero di byte da decodificare o il formato binario della lunghezza che precede il testo.  Il valore facoltativo <code>encoding</code> specifica la codifica del testo.  Se <code>encoding</code> non viene specificato, la codifica è determinata dai byte order mark Unicode.  Se non sono presenti byte order mark, viene utilizzato <code>TextEncoding.Utf8</code>.


## Examples

### Example #1 
Decodificare due byte come testo ASCII.
```powerquery
let
    binaryData = #binary({65, 66, 67}),
    textFormat = BinaryFormat.Text(2, TextEncoding.Ascii)
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```


### Example #2 
Decodificare il testo ASCII in cui la lunghezza del testo in byte è presente prima del testo come byte.
```powerquery
let
    binaryData = #binary({2, 65, 66}),
    textFormat = BinaryFormat.Text(
        BinaryFormat.Byte,
        TextEncoding.Ascii
    )
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```




## Category
Binary Formats.Reading text
