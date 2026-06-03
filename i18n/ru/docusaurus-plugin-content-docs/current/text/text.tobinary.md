---
title: Text.ToBinary
---

# Text.ToBinary


Кодирует текст в двоичную форму.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Кодирует текстовое значение в двоичное значение с помощью указанной кодировки.

-   `text`: текст для кодирования.
-   `encoding`: (необязательно) кодировка, применяемая для преобразования текста в двоичный формат. Чтобы указать тип кодировки, используйте `BinaryEncoding.Type`. Если значение не указано, по умолчанию используется значение `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: (необязательно) определяет, нужно ли включать метку порядка байтов (BOM) в начало двоичного вывода. Задайте значение `true`, чтобы автоматически включить BOM. В противном случае используйте `false`. Если это значение не указано, по умолчанию используется значение `false`.


## Examples

### Example #1
Кодировать текст в двоичный формат, создать отображаемую строку Base64, затем декодировать ее обратно в текст.
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
Кодировать текст в двоичный формат с меткой порядка байтов (BOM), создать отображаемую шестнадцатеричную строку, затем декодировать ее обратно в текст.
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
