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

Scrive una traccia `message`, se la traccia è abilitata, e restituisce `value`. Un parametro facoltativo, `delayed`, specifica se ritardare la valutazione di `value` fino a quando il messaggio non viene analizzato. `traceLevel` può accettare uno dei valori seguenti:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
