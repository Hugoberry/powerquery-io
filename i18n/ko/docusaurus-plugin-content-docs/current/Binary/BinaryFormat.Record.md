---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

레코드를 읽는 이진 형식을 반환합니다.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

레코드를 읽는 이진 형식을 반환합니다. <code>record</code> 매개 변수는 레코드의 형식을 지정합니다. 레코드의 각 필드마다 다른 이진 형식이 사용될 수 있습니다. 필드에 이진 형식 값이 아닌 값이 포함되어 있는 경우 해당 필드의 데이터는 읽지 않으며 해당 필드 값은 결과에 그대로 표시됩니다.


## Examples

### Example #1 
16비트 정수 하나와 32비트 정수 하나를 포함하는 레코드를 읽습니다.
```powerquery
let
    binaryData = #binary({
        0x00, 0x01,
        0x00, 0x00, 0x00, 0x02
    }),
    recordFormat = BinaryFormat.Record([
        A = BinaryFormat.UnsignedInteger16,
        B = BinaryFormat.UnsignedInteger32
    ])
in
    recordFormat(binaryData)
```

Result: 
```powerquery
[A = 1, B = 2]
```




## Category
Binary Formats.Reading records
