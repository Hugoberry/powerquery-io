---
title: Value.NativeQuery
---

# Value.NativeQuery


대상에 대해 쿼리를 평가합니다.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

`parameters`에 지정된 매개 변수 및 `options`에 지정된 옵션을 사용하여 `target`에 대해 `query`을(를) 평가합니다.

쿼리의 출력은 `target`에서 정의됩니다.

`target`에서는 `query`에서 설명한 작업에 대해 컨텍스트를 제공합니다.

`query`에서는 `target`에 대해 실행할 쿼리를 설명합니다. `query`은(는) `target`과(와) 관련된 방식으로 표현됩니다(예: T-SQL 문).

선택적 `parameters` 값에는 `query`에서 예상된 매개 변수 값을 공급하는 데 적합한 목록 또는 레코드가 포함되어 있을 수 있습니다.

선택적 `options` 레코드에는 `query`에 대한 `target`의 평가 동작에 영향을 주는 옵션이 포함되어 있을 수 있습니다. 이러한 옵션은 `target`과(와) 관련이 있습니다.



## Category
Values
