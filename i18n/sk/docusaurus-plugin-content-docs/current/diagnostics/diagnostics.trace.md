---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Zapíše položku sledovania, ak je sledovanie povolené, a vráti hodnotu.


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

Zapíše stopu `message`, ak je trasovanie povolené, a vráti hodnotu `value`. Voliteľný parameter `delayed` určuje, či sa má vyhodnotenie `value` odložiť až do zaznamenania správy do stopy. `traceLevel` môže nadobúdať jednu z nasledujúcich hodnôt:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Sleduje správu pred vyvolaním funkcie Text.From a vráti výsledok.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
