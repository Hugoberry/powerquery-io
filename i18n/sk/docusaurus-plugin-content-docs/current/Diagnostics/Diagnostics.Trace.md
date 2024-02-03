---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

Zapíše sledovanie <code>message</code>, ak je sledovanie povolené, a vráti <code>value</code>. Voliteľný parameter <code>delayed</code> určuje, či sa má oneskoriť vyhodnotenie <code>value</code>, kým sa nezačne správa sledovať. <code>traceLevel</code> môže mať jednu z nasledujúcich hodnôt:    <code>TraceLevel.Critical</code>,    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


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
