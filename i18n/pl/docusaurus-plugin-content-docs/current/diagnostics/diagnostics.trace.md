---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Zapisuje wpis śledzenia, jeśli śledzenie jest włączone, i zwraca wartość.


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

Zapisuje dane śledzenia <code>message</code>, jeśli śledzenie jest włączone, i zwraca wartość <code>value</code>. Opcjonalny parametr <code>delayed</code> umożliwia określenie, czy ocena wartości <code>value</code> ma zostać opóźniona do czasu wykonania śledzenia komunikatu. Element <code>traceLevel</code> może przyjąć jedną z następujących wartości:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Wykonaj śledzenie komunikatu przed wywołaniem funkcji Text.From i zwróć wynik.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
