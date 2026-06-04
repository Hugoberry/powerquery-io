---
title: Text.ToBinary
---

# Text.ToBinary


Codifica text en forma binària.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Codifica un valor de text en un valor binari utilitzant la codificació especificada.

-   `text`: el text que s'ha de codificar.
-   `encoding`: (Opcional) La codificació utilitzada per convertir el text en binari. Utilitzeu `BinaryEncoding.Type` per especificar el tipus de codificació. Si no s'especifica aquest valor, el valor per defecte és `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: (Opcional) determina si s'ha d'incloure una marca d'ordre de byte (BOM) a l'inici de la sortida binària. Configureu-ho com a `true` per incloure automàticament el BOM; en cas contrari, configureu-ho com a `false`. Si no s’especifica aquest valor, el valor per defecte és `false`.


## Examples

### Example #1
Codifica text a binari, produeix una cadena Base64 visible i després torna a descodificar-la a text.
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
Codifica el text a binari amb una marca d'ordre de byte (BOM), genera una cadena hexadecimal visible i després la descodifica a text.
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
