---
title: Text.ToBinary
---

# Text.ToBinary


Bináris formában kódolja a szöveget.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Egy szöveges értéket bináris értékké kódol a megadott kódolással.

-   `text`: A kódolni kívánt szöveg.
-   `encoding`: (Nem kötelező) A szöveg binárissá alakításához használt kódolás. A kódolás típusát a `BinaryEncoding.Type` használatával adhatja meg. Ha ez az érték nincs megadva, az alapértelmezett érték a `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: (Nem kötelező) Meghatározza, hogy szerepeljen-e bájtsorrendjelző (BOM) a bináris kimenet elején. Állítsa `true` (igaz) értékre a BOM automatikus belefoglalásához, egyéb esetben állítsa `false` (hamis) értékre. Ha ez az érték nincs megadva, az alapértelmezett érték `false`.


## Examples

### Example #1
A szöveget binárissá kódolhatja, megjeleníthető Base64-sztringet hozhat létre, majd visszakódolhatja szöveggé.
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
Kódolja a szöveget bináris formátumba bájtsorrendjelző (BOM) segítségével, hozzon létre egy megtekinthető hexadecimális sztringet, majd dekódolja vissza szöveggé.
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
