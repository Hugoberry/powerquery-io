---
title: Text.ToBinary
---

# Text.ToBinary


Kodar text till ett binärformat.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Kodar ett textvärde till ett binärvärde med angiven kodning.

-   `text`: Texten som ska kodas.
-   `encoding`: (valfritt) Den kodning som används för att konvertera texten till binär. Använd `BinaryEncoding.Type` för att ange typ av kodning. Om värdet inte anges är standardvärdet `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: (valfritt) Anger om en markering för byteordning (BOM) ska läggas till i början av binära utdata. Ställ in på `true` om en markering för byteordning ska läggas till automatiskt, annars `false`. Om värdet inte anges är standardvärdet `false`.


## Examples

### Example #1
Koda text till binär, skapa en visningsbar Base64-sträng och avkoda den sedan tillbaka till text.
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
Koda text till binär med en markering för byteordning (BOM), skapa en visningsbar hexadecimal sträng och avkoda den sedan tillbaka till text.
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
