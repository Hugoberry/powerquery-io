---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

傳回讀取文字值的二進位格式。


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

傳回會讀取文字值的二進位格式。<code>length</code> 會指定要解碼的位元組數，或長度的二進位格式，放在文字前面。選擇性的 <code>encoding</code> 值會指定文字的編碼。如果未指定 <code>encoding</code>，則會根據 Unicode 位元組順序標記判斷編碼。如果沒有位元組順序標記，則會使用 <code>TextEncoding.Utf8</code>。


## Examples

### Example #1 
將兩個位元組當成 ASCII 文字解碼。
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
將 ASCII 文字解碼，其中文字的位元組長度以位元組形式出現在文字前面。
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
