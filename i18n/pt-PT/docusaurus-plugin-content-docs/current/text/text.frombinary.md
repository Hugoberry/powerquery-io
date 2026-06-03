---
title: Text.FromBinary
---

# Text.FromBinary


Descodifica dados de um formato binário para um formato de texto.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Descodifica dados de um valor binário para um valor de texto utilizando o tipo de codificação especificado.

-   `binary`: Os dados binários a descodificar.
-   `encoding`: (Opcional) A codificação utilizada para converter o binário em texto. Utilize `BinaryEncoding.Type` para especificar o tipo de codificação. Se este valor não for especificado, o valor predefinido é `BinaryEncoding.Utf8`.


## Examples

### Example #1
Codificar texto para binário, produzir uma cadeia Base64 visível e, em seguida, descodificá-la novamente para texto.
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
Codificar texto para binário com uma Marca de Ordem de Bytes (BOM), produzir uma cadeia hexadecimal visível e, em seguida, descodificá-la novamente para texto.
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
