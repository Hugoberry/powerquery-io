---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Создает запись трассировки, если трассировка включена, и возвращает значение.


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

Записывает трассировку `message`, если трассировка включена, и возвращает `value`. Необязательный параметр `delayed` указывает, следует ли отложить вычисление `value` до трассировки сообщения. `traceLevel` может принимать одно из следующих значений:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Трассировка сообщения перед вызовом функции Text.From и возврат результата.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
