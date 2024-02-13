---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Skriver en sporingspost (hvis sporing er aktiveret) og returnerer værdien.


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

Skriver en sporing <code>message</code>, hvis sporing er aktiveret, og returnerer <code>value</code>. En valgfri parameter, <code>delayed</code>, angiver, om evalueringen af <code>value</code> skal udsættes, til meddelelsen er sporet. <code>traceLevel</code> kan anvende én af følgende værdier:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Spor meddelelsen, før funktionen Text.From aktiveres, og returner resultatet.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
