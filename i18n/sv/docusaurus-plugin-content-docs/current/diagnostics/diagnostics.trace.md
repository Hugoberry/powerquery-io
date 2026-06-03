---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Skriver en spårningspost, om spårning har aktiverats, och returnerar värdet.


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

Skriver en spårning `message`, om spårning är aktiverat och returnerar `value`. En valfri parameter `delayed` anger om utvärderingen av `value` ska fördröjas tills meddelandet spåras. `traceLevel` kan ta något av följande värden:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Spåra meddelandet innan du anropar funktionen Text.From och returnerar resultatet.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
