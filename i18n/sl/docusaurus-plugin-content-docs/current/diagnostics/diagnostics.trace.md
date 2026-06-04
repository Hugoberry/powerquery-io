---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Zapiše vnos sledi, če je omogočeno sledenje, in vrne vrednost.


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

Zapiše sled `message`, če je sledenje omogočeno, in vrne `value`. Izbirni parameter `delayed` določa, ali je treba zakasnitev `value` , dokler sporočilo ni sledeno. Za `traceLevel` lahko vnesete eno od teh vrednosti:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Sledi sporočilu, preden prikliče funkcijo Text.From, in vrne rezultat.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
