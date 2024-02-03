---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

İzleme etkinse bir izleme girişi yazar ve değeri döndürür.


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

İzleme etkinse bir izleme <code>message</code> yazar ve <code>value</code> döndürür. İsteğe bağlı <code>delayed</code> parametresi, ileti izlenene kadar <code>value</code> değerlendirmesinin ertelenip ertelenmeyeceğini belirtir. <code>traceLevel</code> şu değerlerden birini alabilir:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Text.From işlevini çağırmadan önce iletiyi izler ve sonucu döndürür.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
