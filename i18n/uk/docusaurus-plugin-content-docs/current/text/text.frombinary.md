---
title: Text.FromBinary
---

# Text.FromBinary


Розшифровує дані з двійкового формату на текстовий.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Декодує дані з двійкового значення в текстове, використовуючи вказаний тип кодування.

-   `binary`: двійкові дані, які потрібно декодувати.
-   `encoding`: (необов’язково) кодування, що використовується для перетворення двійкового коду на текст. Використовуйте параметр `BinaryEncoding.Type`, щоб указати тип кодування. Якщо значення не вказано, за замовчуванням використовується значення `BinaryEncoding.Utf8`.


## Examples

### Example #1
Закодуйте текст у двійковий код, згенеруйте придатний для перегляду рядок Base64 й декодуйте його назад у текст.
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
Закодуйте текст у двійковий код зі знаком порядку байтів, згенеруйте придатний для перегляду шістнадцятковий рядок і декодуйте його назад у текст.
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
