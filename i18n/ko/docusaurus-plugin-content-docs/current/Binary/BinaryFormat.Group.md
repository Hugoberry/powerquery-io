---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

항목 그룹을 읽는 이진 형식을 반환합니다.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Details

매개 변수는 다음과 같습니다.<ul><li><code>binaryFormat</code> 매개 변수는 키 값의 이진 형식을 지정합니다.</li><li><code>group</code> 매개 변수는 알려진 항목의 그룹에 대한 정보를 제공합니다.</li><li>선택적 <code>extra</code> 매개 변수는 예기치 않은 키 다음의 값으로 이진 형식 값을 반환하는 함수를 지정하는 데 사용할 수 있습니다. <code>extra</code> 매개 변수가 지정되지 않은 경우 예기치 않은 키 값이 있으면 오류가 발생합니다.</li></ul><code>group</code> 매개 변수는 항목 정의의 목록을 지정합니다. 각 항목 정의는 다음과 같이 3~5개의 값을 포함하는 목록입니다.<ul><li>키 값. 항목에 해당하는 키의 값입니다. 키 값은 항목 집합 내에서 고유해야 합니다.</li><li>항목 형식. 항목의 값에 해당하는 이진 형식입니다. 항목 형식을 사용하여 각 항목에 서로 다른 형식을 지정할 수 있습니다. </li><li>항목 발생. 항목이 그룹에 나타나야 하는 횟수에 해당하는 <code>BinaryOccurrence.Type</code> 값입니다. 필수 항목이 나타나지 않으면 오류가 발생합니다. 중복 필수 또는 선택적 항목은 예기치 않은 키 값처럼 처리됩니다.</li><li>기본 항목 값(옵션). 기본 항목 값이 항목 정의 목록에 있고 Null이 아닌 경우 기본값 대신 기본 항목 값이 사용됩니다. 반복 또는 선택적 항목의 기본값은 Null이며, 반복 값의 기본값은 빈 목록 \{ }입니다.</li><li>항목 값 변환(옵션). 항목 값 변환 함수가 항목 정의 목록에 있고 Null이 아닌 경우 항목 값이 반환되기 전에 이 함수가 호출되어 항목 값을 변환합니다. 변환 함수는 입력에 항목이 나타나는 경우에만 호출됩니다(기본값으로는 호출되지 않음). </li></ul>


## Examples

### Example #1 
아래에서는 키 값이 단일 바이트이고, 그룹의 예상 항목 수가 4개이며, 모든 항목에서 키 다음에 데이터 바이트가 있다고 가정합니다. 항목은 입력에 다음과 같이 나타납니다.&lt;ul&gt;&lt;li&gt;키 1은 필수이며 값 11과 함께 나타납니다.&lt;/li&gt;&lt;li&gt;키 2는 값 22와 함께 반복적으로 두 번 나타나므로 결과 값이 \{ 22, 22 }가 됩니다.&lt;/li&gt;&lt;li&gt;키 3은 선택적으로, 나타나지 않으므로 결과 값이 Null이 됩니다.&lt;/li&gt;&lt;li&gt;키 4는 반복적이지만 나타나지 않으므로 결과 값이 \{ }가 됩니다.&lt;/li&gt;&lt;li&gt;키 5는 그룹의 일부가 아니지만 값 55와 함께 한 번 나타납니다. 추가 함수는 키 값 5를 사용하여 호출되며 해당 값(BinaryFormat.Byte)에 해당하는 형식을 반환합니다. 값 55는 읽은 후 삭제됩니다.&lt;/li&gt;&lt;/ul&gt;
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2 
다음 예에서는 항목 값 변환과 기본 항목 값을 보여 줍니다. 키 1의 반복 항목은 List.Sum을 사용하여 읽은 값 목록의 합계를 계산합니다. 키 2의 선택적 항목에는 Null 대신 기본값 123이 사용됩니다.
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items
