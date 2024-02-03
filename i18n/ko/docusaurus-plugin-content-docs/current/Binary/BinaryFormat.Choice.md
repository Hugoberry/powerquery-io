---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

이미 읽은 값에 따라 다음 이진 형식을 선택하는 이진 형식을 반환합니다.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Details

이미 읽은 값에 따라 다음 이진 형식을 선택하는 이진 형식을 반환합니다. 이 함수로 생성되는 이진 형식 값은 다음과 같은 단계로 사용됩니다.<ul><li><code>binaryFormat</code> 매개 변수로 지정된 이진 형식을 사용하여 값을 읽습니다.</li><li>이 값을 <code>chooseFunction</code> 매개 변수로 지정된 선택 함수에 전달합니다.</li><li>선택 함수가 값을 검사하고 두 번째 이진 형식을 반환합니다.</li><li>두 번째 이진 형식을 사용하여 두 번째 값을 읽습니다.</li><li>조합 함수가 지정된 경우 첫 번째 값과 두 번째 값을 조합 함수에 전달하고 결과 값을 반환합니다.</li><li>조합 함수가 지정되지 않은 경우에는 두 번째 값을 반환합니다.</li><li>두 번째 값을 반환합니다.</li></ul>선택적 <code>type</code> 매개 변수는 선택 함수에 의해 반환되는 이진 형식의 유형을 나타냅니다. <code>type any</code>, <code>type list</code> 또는 <code>type binary</code>를 지정할 수 있으며, <code>type</code> 매개 변수를 지정하지 않으면 <code>type any</code>가 사용됩니다. <code>type list</code> 또는 <code>type binary</code>를 사용할 경우에는 시스템이 버퍼링된 값 대신 스트리밍 <code>binary</code> 또는 <code>list</code> 값을 반환할 수 있습니다. 이 경우 형식을 읽는 데 필요한 메모리 양이 줄어들 수 있습니다.


## Examples

### Example #1 
첫 번째 바이트로 요소 수가 결정되는 바이트 목록을 읽습니다.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2 
첫 번째 바이트로 요소 수가 결정되는 바이트 목록을 읽고 읽은 첫 번째 바이트를 유지합니다.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3 
스트리밍 목록을 사용하여 첫 번째 바이트로 요소 수가 결정되는 바이트 목록을 읽습니다.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
