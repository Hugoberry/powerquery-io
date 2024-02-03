---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

Scrie o trasare <code>message</code>, dacă s-a activat trasarea, și returnează <code>value</code>. Un parametru opțional, <code>delayed</code>, specifică dacă să se amâne evaluarea <code>value</code> până la trasarea mesajului. <code>traceLevel</code> poate prelua una dintre următoarele valori:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


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
