---
title: Diagnostics.Trace
---

# Diagnostics.Trace


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


## Remarks

Записує слід `message`, якщо трасування ввімкнено, і повертає `value`. Необовʼязковий параметр `delayed` визначає, чи слід відкладати оцінювання `value`, доки повідомлення не буде трасовано. Параметр `traceLevel` може мати одне з таких значень:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
