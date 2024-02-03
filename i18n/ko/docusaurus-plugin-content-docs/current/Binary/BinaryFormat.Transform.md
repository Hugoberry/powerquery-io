---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

다른 이진 형식으로 읽은 값을 변환하는 이진 형식을 반환합니다.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

다른 이진 형식으로 읽은 값을 변환하는 이진 형식을 반환합니다. <code>binaryFormat</code> 매개 변수는 값을 읽는 데 사용되는 이진 형식을 지정합니다. <code>function</code>은(는) 읽은 값에 대해 호출되어 변환된 값을 반환합니다.


## Examples

### Example #1 
바이트를 읽고 해당 바이트에 1을 더합니다.
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
