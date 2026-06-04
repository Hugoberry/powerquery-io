---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Scrie o intrare de trasare, dacă s-a activat trasarea, și returnează valoarea.


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

Scrie un `message` de urmărire, dacă trasarea este activată, și returnează `value`. Un parametru opțional `delayed` specifică dacă să amânați evaluarea `value` până când mesajul este urmărit. `traceLevel` poate lua una dintre următoarele valori:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Trasați mesajul înainte de a invoca funcția Text.From și a returna rezultatul.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
