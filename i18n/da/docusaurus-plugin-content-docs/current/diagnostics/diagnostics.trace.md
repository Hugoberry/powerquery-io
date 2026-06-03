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

Skriver en sporing `message`, hvis sporing er aktiveret, og returnerer `value`. En valgfri parameter `delayed` angiver, om evalueringen af `value` skal forsinkes, indtil meddelelsen spores. `traceLevel` kan tage en af følgende værdier:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
