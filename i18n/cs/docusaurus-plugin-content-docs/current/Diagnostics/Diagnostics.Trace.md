---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Zapíše položku trasování, pokud je trasování je povolené, a vrátí hodnotu.


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

Zapíše trasování <code>message</code>, pokud je trasování povolené, a vrátí <code>value</code>. Volitelný parametr <code>delayed</code> určuje, jestli se má pozdržet vyhodnocení <code>value</code>, dokud se neprovede trasování zprávy. <code>traceLevel</code> může mít jednu z následujících hodnot:    <code>TraceLevel.Critical</code>,    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Trasuje zprávu před vyvoláním funkce Text.From a vrátí výsledek.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
