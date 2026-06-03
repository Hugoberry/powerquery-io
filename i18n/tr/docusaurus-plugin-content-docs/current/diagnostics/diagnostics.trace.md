---
title: Diagnostics.Trace
---

# Diagnostics.Trace


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


## Remarks

İzleme etkinse `message` bir izleme kaydı yazar ve `value` değerini döndürür. İsteğe bağlı `delayed` parametresi, `value`'ün değerlendirilmesinin mesajın izlenmesine kadar ertelenip ertelenmeyeceğini belirler. `traceLevel` aşağıdaki değerlerden birini alabilir:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
