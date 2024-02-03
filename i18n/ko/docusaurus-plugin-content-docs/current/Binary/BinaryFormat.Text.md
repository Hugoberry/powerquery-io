---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

텍스트 값을 읽는 이진 형식을 반환합니다.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

텍스트 값을 읽는 이진 형식을 반환합니다. <code>length</code>은(는) 디코딩할 바이트 수를 지정하거나, 텍스트 앞에 오는 길이의 이진 형식을 지정합니다. 선택적 <code>encoding</code> 값은 텍스트의 인코딩을 지정합니다. <code>encoding</code>을(를) 지정하지 않은 경우 인코딩은 유니코드 바이트 순서 표시에 따라 결정됩니다. 바이트 순서 표시가 없는 경우에는 <code>TextEncoding.Utf8</code>을 사용합니다.


## Examples

### Example #1 
2바이트를 ASCII 텍스트로 디코딩합니다.
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
바이트의 텍스트 길이가 텍스트 앞에 바이트로 나타나는 ASCII 텍스트를 디코딩합니다.
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
