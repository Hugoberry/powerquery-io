---
title: Binary.View
---

# Binary.View


쿼리 및 작업 작동에 대해 사용자 정의 처리기로 이진 파일을 만들거나 확장합니다.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

작업이 보기에 적용되면 작업의 기본 동작 대신 `handlers`에 지정된 함수를 사용하는 `binary`의 보기를 반환합니다.

`binary`이(가) 제공되는 경우 모든 처리기 기능은 선택 사항입니다. `binary`이(가) 제공되지 않으면 `GetStream` 처리기 함수가 필요합니다. 작업에 대해 처리기 함수가 지정되지 않은 경우 작업의 기본 동작이 대신 `binary`에 적용됩니다(`GetExpression`의 경우 제외).

처리기 함수는 `binary`에 대해 작업을 적용한 결과와 의미상 동일한 값을 반환해야 합니다(또는 `GetExpression` 경우의 결과 보기).

처리기 함수에서 오류가 발생하면 작업의 기본 동작이 보기에 적용됩니다.

`Binary.View`는 접기를 데이터 원본에 구현, 즉 M 쿼리를 원본별 작업으로 변환하는 데 사용될 수 있습니다(예: 파일의 섹션을 다운로드하는 경우).

`Binary.View`에 대한 보다 완벽한 설명을 보려면 게시된 Power Query 사용자 지정 커넥터 문서를 참조하세요.


## Examples

### Example #1
길이를 결정하기 위해 데이터에 액세스할 필요가 없는 기본 보기를 만듭니다.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
