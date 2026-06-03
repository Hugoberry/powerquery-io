---
title: Text.FromBinary
---

# Text.FromBinary


Descodifica datos de un formato binario en texto.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Descodifica datos de un valor binario a un valor de texto usando el tipo de codificación especificado.

-   `binary`: los datos binarios que se van a descodificar.
-   `encoding`: (opcional) la codificación usada para convertir el binario en texto. Use `BinaryEncoding.Type` para especificar el tipo de codificación. Si no se especifica este valor, el valor predeterminado es `BinaryEncoding.Utf8`.


## Examples

### Example #1
Codifique texto a binario, produzca una cadena Base64 visible y luego descodifíquela de nuevo a texto.
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
Codifique texto en binario con una marca de orden de bytes (BOM), genere una cadena hexadecimal visible y luego descodifíquela de nuevo a texto.
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
