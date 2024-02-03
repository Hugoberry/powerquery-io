---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Ispisuje stavku praćenja, ako je praćenje omogućeno, i vraća vrednost.


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

Ispisuje praćenje <code>message</code>, ako je praćenje omogućeno, i vraća <code>value</code>. Opcionalni parametar <code>delayed</code> navodi da li treba odložiti procenu za <code>value</code> dok se poruka ne isprati. <code>traceLevel</code> može da preuzme jednu od sledećih vrednosti:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Pratite poruku pre pozivanja funkcije Text.From i dobijte rezultat.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
