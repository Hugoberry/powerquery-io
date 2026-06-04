---
title: Diagnostics.Trace
---

# Diagnostics.Trace


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


## Remarks

Zapíše trasování `message`, pokud je trasování povoleno, a vrátí hodnotu `value`. Volitelný parametr `delayed` určuje, jestli se má vyhodnocení `value` pozdržet, dokud se zpráva nezačne sledovat. `traceLevel` může mít jednu z následujících hodnot:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
