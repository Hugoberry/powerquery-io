---
title: Diagnostics.Trace
---

# Diagnostics.Trace


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


## Remarks

Ha a nyomkövetés engedélyezve van, nyomon követi a(z) `message` értéket, majd visszaadja a(z) `value` értéket. Egy nem kötelező paraméter (`delayed`) határozza meg, hogy késlelteti-e a(z) `value` kiértékelését az üzenet nyomon követéséig. A(z) `traceLevel` a következő értékek egyikét veheti fel:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
