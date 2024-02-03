---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

Записывает трассировку <code>message</code>, если трассировка включена, и возвращает <code>value</code>. Необязательный параметр <code>delayed</code> указывает, следует ли откладывать оценку <code>value</code> до трассировки сообщения. <code>traceLevel</code> может иметь одно из следующих значений:    <code>TraceLevel.Critical</code>,    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


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
