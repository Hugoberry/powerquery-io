---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

Skriver en spårningspost, <code>message</code>, om spårning har aktiverats, och returnerar <code>value</code>. Den valfria parametern <code>delayed</code> anger om utvärderingen av <code>value</code> ska fördröjas tills meddelandet spåras. <code>traceLevel</code> kan ha något av följande värden:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


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
