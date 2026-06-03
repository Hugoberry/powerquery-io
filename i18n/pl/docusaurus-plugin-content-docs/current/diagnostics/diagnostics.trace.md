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

Zapisuje dane śledzenia `message`, jeśli śledzenie jest włączone, i zwraca wartość `value`. Opcjonalny parametr `delayed` umożliwia określenie, czy ocena wartości `value` ma zostać opóźniona do czasu wykonania śledzenia komunikatu. Element `traceLevel` może przyjąć jedną z następujących wartości:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
