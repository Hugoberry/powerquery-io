---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Esegue la scrittura di una voce di traccia, se la traccia è abilitata, e restituisce il valore.


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

Esegue la scrittura di una traccia <code>message</code>, se la traccia è abilitata, e restituisce <code>value</code>. Un parametro facoltativo, <code>delayed</code>, specifica se ritardare o meno la valutazione di <code>value</code> fino a quando il messaggio non viene tracciato. <code>traceLevel</code> può accettare uno dei valori seguenti:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Traccia il messaggio prima di richiamare la funzione Text.From e restituisce il risultato.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
