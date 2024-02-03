---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Egy nyomkövetési bejegyzést ír, ha a nyomkövetés engedélyezve van, és visszaadja az értéket.


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

Egy nyomkövetést (<code>message</code>) ír, ha a nyomkövetés engedélyezve van, és visszaadja a(z) <code>value</code> értéket. Egy választható paraméter (<code>delayed</code>) meghatározza, hogy a(z) <code>value</code> kiértékelése késleltetve legyen-e az üzenet nyomon követéséig. A(z) <code>traceLevel</code> a következő értékek egyikét veheti fel:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Az üzenet nyomon követése a Text.Form függvény meghívása előtt, és az eredmény visszaadása.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
