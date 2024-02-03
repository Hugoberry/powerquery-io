---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

읽을 수 있는 데이터의 양을 제한하는 이진 형식을 반환합니다.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

읽을 수 있는 데이터의 양을 제한하는 이진 형식을 반환합니다. <code>BinaryFormat.List</code> 및 <code>BinaryFormat.Binary</code>는 모두 데이터를 끝까지 읽는 데 사용할 수 있습니다. <code>BinaryFormat.Length</code>는 읽는 바이트의 수를 제한하는 데 사용할 수 있습니다. <code>binaryFormat</code> 매개 변수는 제한할 이진 형식을 지정합니다. <code>length</code> 매개 변수는 읽을 바이트 수를 지정합니다. <code>length</code> 매개 변수는 숫자 값이거나, 읽을 값 앞에 오는 길이 값의 형식을 지정하는 이진 형식 값일 수 있습니다.


## Examples

### Example #1 
바이트 목록을 읽을 때 읽을 바이트 수를 2로 제한합니다.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
바이트 목록을 읽을 때 읽을 바이트 수를 목록 앞에 오는 바이트 값으로 제한합니다.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
