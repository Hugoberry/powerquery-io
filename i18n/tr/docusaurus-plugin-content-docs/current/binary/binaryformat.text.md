---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Bir metin değeri okuyan ikili biçimi döndürür.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Bir metin değeri okuyan bir ikili biçim döndürür. `length`, kodu çözülecek bayt sayısını veya metinden önce gelen uzunluğun ikili biçimini belirtir. İsteğe bağlı `encoding`değeri, metnin kodlamasını belirtir. `encoding`belirtilmemişse, kodlama Unicode bayt sıra işaretlerinden belirlenir. Bayt sırası işaretleri yoksa, `TextEncoding.Utf8` kullanılır.


## Examples

### Example #1
İki baytın kodunu ASCII metni olarak çözer.
```powerquery
let
    binaryData = #binary({65, 66, 67}),
    textFormat = BinaryFormat.Text(2, TextEncoding.Ascii)
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```


### Example #2
Metnin bayt cinsinden uzunluğunun metinden önce bayt olarak göründüğü ASCII metninin kodunu çözer.
```powerquery
let
    binaryData = #binary({2, 65, 66}),
    textFormat = BinaryFormat.Text(
        BinaryFormat.Byte,
        TextEncoding.Ascii
    )
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```




## Category
Binary Formats.Reading text
