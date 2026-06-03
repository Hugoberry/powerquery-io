---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Als tracering is ingeschakeld, wordt hiermee een traceervermelding geschreven en wordt de waarde geretourneerd.


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

Schrijft een spoor `message` als tracering is ingeschakeld en retourneert `value`. Een optionele parameter `delayed` geeft aan of de evaluatie van `value` moet worden uitgesteld totdat het bericht wordt getraceerd. `traceLevel` kan een van de volgende waarden hebben:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Het bericht traceren voordat de functie Text.From wordt aangeroepen en het resultaat retourneren.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
