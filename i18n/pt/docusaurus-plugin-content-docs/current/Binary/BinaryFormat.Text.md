---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Returns a binary format that reads a text value.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Returns a binary format that reads a text value.  The <code>length</code> specifies the number of bytes to decode, or the binary format of the length that precedes the text.  The optional <code>encoding</code> value specifies the encoding of the text.  If the <code>encoding</code> is not specified, then the encoding is determined from the Unicode byte order marks.  If no byte order marks are present, then <code>TextEncoding.Utf8</code> is used.


## Examples

### Example #1 
Decode two bytes as ASCII text.
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
Decode ASCII text where the length of the text in bytes appears before the text as a byte.
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
