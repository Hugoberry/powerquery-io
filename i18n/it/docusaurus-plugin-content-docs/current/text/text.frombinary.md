---
title: Text.FromBinary
---

# Text.FromBinary


Decodifica i dati da un formato binario in testo.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Decodifica i dati da un valore binario in un valore di testo usando il tipo di codifica specificato.

-   `binary`: dati binari da decodificare.
-   `encoding`: (Facoltativo) codifica usata per convertire il valore binario in testo. Usa `BinaryEncoding.Type` per specificare il tipo di codifica. Se il valore non è specificato, il valore predefinito è `BinaryEncoding.Utf8`.


## Examples

### Example #1
Codifica il testo in un valore binario, genera una stringa Base64 visualizzabile, quindi la decodifica nuovamente in testo.
```powerquery
let
    originalText = "Testing 1-2-3",

    // Default UTF-8 binary
    binaryData = Text.ToBinary(originalText),

    // Convert binary to viewable Base64 string
    encodedText = Binary.ToText(binaryData, BinaryEncoding.Base64),

    // Decode back to text
    decodedText = Text.FromBinary(binaryData),

    result = [
        OriginalText = originalText,
        BinaryBase64 = encodedText,
        DecodedText = decodedText
    ]
in
    result
```

Result: 
```powerquery
[
    OriginalText = "Testing 1-2-3",
    BinaryBase64 = "VGVzdGluZyAxLTItMw==",
    DecodedText = "Testing 1-2-3"
]
```


### Example #2
Codifica il testo in binario con un BOM (Byte Order Mark), genera una stringa esadecimale visualizzabile, quindi la decodifica nuovamente in testo.
```powerquery
let
    originalText = "Testing 1-2-3",

    // Convert to binary with BOM
    binaryData = Text.ToBinary(originalText, TextEncoding.Utf16, true),

    // Show binary as hex to demonstrate presence of BOM (fffe)
    binaryAsHex = Binary.ToText(binaryData, BinaryEncoding.Hex),

    // Decode back to text
    decodedText = Text.FromBinary(binaryData, TextEncoding.Utf16),

    // Compare original text and decoded text
    isIdentical = originalText = decodedText,

    result = [
        OriginalText = originalText,
        BinaryHex = binaryAsHex,
        DecodedText = decodedText,
        IsIdentical = isIdentical
    ]
in
    result
```

Result: 
```powerquery
[
    OriginalText = "Testing 1-2-3",
    BinaryHex = "fffe540065007300740069006e006700200031002d0032002d003300",
    DecodedText = "Testing 1-2-3",
    IsIdentical = true
]
```




## Category
Text.Conversions from and to text
