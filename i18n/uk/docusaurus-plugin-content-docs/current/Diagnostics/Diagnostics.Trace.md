---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Записує запис трасування, якщо його ввімкнуто, і повертає значення.


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

Записує трасування <code>message</code>, якщо його ввімкнуто, і повертає значення <code>value</code>. Додатковий параметр <code>delayed</code> вказує, чи слід відкласти обчислення значення <code>value</code>, доки не завершиться трасування повідомлення. <code>traceLevel</code> може мати одне з таких значень:    <code>TraceLevel.Critical</code>;    <code>TraceLevel.Error</code>;    <code>TraceLevel.Warning</code>;    <code>TraceLevel.Information</code>;    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Трасування повідомлення перед викликом функції Text.From і повернення результату.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
