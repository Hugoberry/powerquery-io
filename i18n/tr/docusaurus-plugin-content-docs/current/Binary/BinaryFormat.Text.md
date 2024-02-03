---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Bir metin değeri okuyan ikili biçimi döndürür.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Bir metin değeri okuyan bir ikili biçim döndürür. <code>length</code>, kodu çözülecek bayt sayısını veya metinden önce gelen uzunluğun ikili biçimini belirtir. İsteğe bağlı <code>encoding</code>değeri, metnin kodlamasını belirtir. <code>encoding</code>belirtilmemişse, kodlama Unicode bayt sıra işaretlerinden belirlenir. Bayt sırası işaretleri yoksa, <code>TextEncoding.Utf8</code> kullanılır.


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
