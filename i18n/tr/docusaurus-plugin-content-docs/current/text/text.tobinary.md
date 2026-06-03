---
title: Text.ToBinary
---

# Text.ToBinary


Metnin kodunu ikili biçimi olarak çözer.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Belirtilen kodlamayı kullanarak bir metin değerini ikili değer olarak kodlar.

-   `text`: Kodlanacak metin.
-   `encoding`: (İsteğe bağlı) Metni ikili değere dönüştürmek için kullanılan kodlama. Kodlama türünü belirtmek için `BinaryEncoding.Type` kullanın. Bu değer belirtilmezse varsayılan değer `BinaryEncoding.Utf8` olur.
-   `includeByteOrderMark`: (İsteğe bağlı) İkili çıkışın başına Bayt Sıra İşareti (BOM) eklenip eklenmeyeceğini belirler. BOM'u otomatik olarak eklemek için `true`, aksi takdirde `false` değerine ayarlayın. Bu değer belirtilmezse varsayılan değer `false` olur.


## Examples

### Example #1
Metni ikili olarak kodlayın, görüntülenebilir bir Base64 dizesi oluşturun ve kodunu çözüm metne geri döndürün.
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
Metni Bayt Sırası İşareti (BOM) ile ikili değere kodlayın, görüntülenebilir bir onaltılık dize oluşturun ve sonra kodunu çözüp metne geri döndürün.
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
