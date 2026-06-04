---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Rašo sekimo įrašą, jei sekimo funkcija įjungta, ir pateikia reikšmę.


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

Rašo sekimą `message`, jei sekimo funkcija įjungta, ir pateikia `value`. Pasirinktinis parametras `delayed`, nurodo, ar atidėti `value` vertinimą, kol pranešimas sekamas. `traceLevel` gali turėti vieną iš tokių reikšmių:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Sekti pranešimą prieš iškviečiant funkciją Text.From ir pateikti rezultatą.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
