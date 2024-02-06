---
title: BinaryFormat.Text
---

# BinaryFormat.Text


テキスト値を読み取るバイナリ形式を返します。


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

テキスト値を読み取るバイナリ形式を返します。<code>length</code> は、デコードするバイト数か、テキストの前にある長さのバイナリ形式を指定します。省略可能な <code>encoding</code> 値は、テキストのエンコードを指定します。<code>encoding</code> が指定されない場合、エンコードは Unicode のバイト オーダー マークから判断されます。バイト オーダー マークがない場合は、<code>TextEncoding.Utf8</code> が使用されます。


## Examples

### Example #1 
2 バイトを ASCII テキストとしてデコードします。
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
バイト単位でのテキストの長さがバイトとしてのテキストの前に表示される ASCII テキストをデコードします。
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
