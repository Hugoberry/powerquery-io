---
title: Text.ToBinary
---

# Text.ToBinary


Codifica texto nun formato binario.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Codifica un valor de texto nun valor binario usando a codificación especificada.

-   `text` : O texto que se vai codificar.
-   `encoding` : (Opcional) A codificación empregada para converter o texto a binario. Emprega `BinaryEncoding.Type` para especificar o tipo de codificación. Se non se especifica este valor, o valor predeterminado é `BinaryEncoding.Utf8`.
-   `includeByteOrderMark` : (Opcional) Determina se se debe incluír unha marca de orde de bytes (BOM) ao comezo da saída binaria. Defínase en `true` para incluír automaticamente a BOM; en caso contrario, en `false`. Se non se especifica este valor, o valor predeterminado é `false`.


## Examples

### Example #1
Codifica o texto en binario, produce unha cadea Base64 visible e logo decodifica de novo en texto.
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
Codifica texto en binario cunha marca de orde de bytes (BOM), produce unha cadea hexadecimal visible e logo decodifica de novo en texto.
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
