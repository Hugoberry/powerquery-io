---
title: BinaryFormat.Length
---

# BinaryFormat.Length


읽을 수 있는 데이터의 양을 제한하는 이진 형식을 반환합니다.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

읽을 수 있는 데이터의 양을 제한하는 이진 형식을 반환합니다. `BinaryFormat.List`와 `BinaryFormat.Binary`를 모두 사용하여 데이터 끝까지 읽을 수 있습니다. `BinaryFormat.Length`를 사용하여 읽은 바이트 수를 제한할 수 있습니다. `binaryFormat` 매개 변수는 제한할 이진 형식을 지정합니다. `length` 매개 변수는 읽을 바이트 수를 지정합니다. `length` 매개 변수는 숫자 값이거나, 읽는 값 앞에 나타나는 길이 값의 형식을 지정하는 이진 형식 값일 수 있습니다.


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
