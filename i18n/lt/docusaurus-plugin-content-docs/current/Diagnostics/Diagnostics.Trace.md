---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

Rašo sekimą <code>message</code>, jei sekimo funkcija įjungta, ir pateikia <code>value</code>. Pasirinktinis parametras <code>delayed</code>, nurodo, ar atidėti <code>value</code> vertinimą, kol pranešimas sekamas. <code>traceLevel</code> gali turėti vieną iš tokių reikšmių:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


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
