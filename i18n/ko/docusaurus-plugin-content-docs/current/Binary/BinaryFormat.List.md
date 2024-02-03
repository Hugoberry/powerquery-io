---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

일련의 항목을 읽고 목록을 반환하는 이진 형식을 반환합니다.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

일련의 항목을 읽고 <code>list</code>를 반환하는 이진 형식을 반환합니다. <code>binaryFormat</code> 매개 변수는 각 항목의 이진 형식을 지정합니다. 다음 세 가지 방법으로 읽을 항목 수를 결정할 수 있습니다. <ul><li><code>countOrCondition</code>이(가) 지정되지 않은 경우 항목이 더 이상 없을 때까지 이진 형식을 읽습니다.</li><li><code>countOrCondition</code>이(가) 숫자인 경우 해당 수만큼의 이진 형식을 읽습니다.</li><li><code>countOrCondition</code>이(가) 함수인 경우 읽을 각 항목에 대해 해당 함수를 호출합니다. 이 함수가 true를 반환하면 항목 읽기가 계속되고 false를 반환하면 항목 읽기가 중지됩니다. 마지막 항목은 목록에 포함됩니다.</li><li><code>countOrCondition</code>이(가) 이진 형식인 경우 목록 앞에 항목 수가 와야 하며, 해당 개수를 읽는 데는 지정된 형식이 사용됩니다.</li></ul>


## Examples

### Example #1 
데이터 끝까지 바이트를 읽습니다.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
2바이트를 읽습니다.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3 
바이트 값이 2보다 크거나 같을 때까지 바이트를 읽습니다.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
