---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Writes a trace entry, if tracing is enabled, and returns the value.


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

Writes a trace <code>message</code>, if tracing is enabled, and returns <code>value</code>. An optional parameter <code>delayed</code> specifies whether to delay the evaluation of <code>value</code> until the message is traced. <code>traceLevel</code> can take one of the following values:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Trace the message before invoking Text.From function and return the result.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
