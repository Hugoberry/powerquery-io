---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

返回读取文本值的二进制格式。


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

返回读取文本值的二进制格式。 <code>length</code> 指定要解码的字节数，或者指定文本之前长度的二进制格式。可选的 <code>encoding</code> 值指定文本的编码。如果未指定 <code>encoding</code>，则根据 Unicode 字节顺序标记确定该编码。如果不存在字节顺序标记，则使用 <code>TextEncoding.Utf8</code>。


## Examples

### Example #1 
将两个字节解码为 ASCII 文本。
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
对 ASCII 文本进行解码，其中，以字节为单位的文本长度作为一个字节出现在文本之前。
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
