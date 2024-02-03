---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

추적이 사용하도록 설정되어 있는 경우 <code>message</code> 추적을 쓰고 <code>value</code>을(를) 반환합니다. 선택적 매개 변수 <code>delayed</code>이(가) 메시지가 추적될 때까지 <code>value</code>의 평가를 지연할지 여부를 지정합니다. <code>traceLevel</code>에는 다음 값 중 하나가 지정될 수 있습니다.    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


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
