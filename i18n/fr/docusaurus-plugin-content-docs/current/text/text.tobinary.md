---
title: Text.ToBinary
---

# Text.ToBinary


Code le texte sous forme binaire.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Code une valeur de texte dans une valeur binaire à l’aide du codage spécifié.

-   `text` : texte à coder.
-   `encoding` : (facultatif) codage utilisé pour convertir le texte en binaire. Utilisez `BinaryEncoding.Type` pour spécifier le type de codage. Si cette valeur n’est pas spécifiée, la valeur par défaut est `BinaryEncoding.Utf8`.
-   `includeByteOrderMark` : (facultatif) détermine si une marque d’ordre d’octet (BOM) doit être incluse au début de la sortie binaire. Définissez la valeur sur `true` pour inclure automatiquement la BOM, sinon sur `false`. Si cette valeur n'est pas spécifiée, la valeur par défaut est `false`.


## Examples

### Example #1
Codez le texte en binaire, produisez une chaîne Base64 visible, puis décodez-le en texte.
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
Codez le texte en binaire avec une marque d’ordre d’octet (BOM), produisez une chaîne hexadécimale visible, puis décodez-le en texte.
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
