---
title: Diagnostics.Trace
---

# Diagnostics.Trace


추적이 사용하도록 설정되어 있는 경우 추적 항목을 쓰고 값을 반환합니다.


## Syntax

```powerquery
Diagnostics.Trace(
    traceLevel as number,
    message as any,
    value as any,
    optional delayed as logical
) as any
```


## Remarks

추적을 사용하는 경우 추적 `message`을(를) 쓰고 `value`을(를) 반환합니다. 선택적 매개 변수 `delayed`은(는) 메시지가 추적될 때까지 `value`의 평가를 연기할지 여부를 지정합니다. `traceLevel`은(는) 다음 값 중 하나를 사용할 수 있습니다.

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Text.From 함수를 호출하기 전에 메시지를 추적하고 결과를 반환합니다.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
