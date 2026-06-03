---
title: Text.ToBinary
---

# Text.ToBinary


Koduje tekst w formie binarnej.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Koduje wartość tekstową na wartość binarną przy użyciu określonego kodowania.

-   `text`: tekst do zakodowania.
-   `encoding`: (opcjonalnie) kodowanie używane do konwertowania tekstu na dane binarne. Użyj `BinaryEncoding.Type`, aby określić typ kodowania. Jeśli ta wartość nie zostanie określona, wartością domyślną jest `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: (opcjonalnie) określa, czy znak kolejności bajtów (BOM) powinien zostać uwzględniony na początku binarnych danych wyjściowych. Ustaw wartość `true`, aby automatycznie uwzględniać znacznik BOM, w przeciwnym razie ustaw wartość `false`. Jeśli ta wartość nie zostanie określona, wartością domyślną będzie wartość `false`.


## Examples

### Example #1
Zakoduj tekst do pliku binarnego, utwórz widoczny ciąg Base64, a następnie zdekoduj go z powrotem do tekstu.
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
Zakoduj tekst do pliku binarnego za pomocą znacznika kolejności bajtów (BOM), utwórz widoczny ciąg szesnastkowy, a następnie zdekoduj go z powrotem do tekstu.
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
