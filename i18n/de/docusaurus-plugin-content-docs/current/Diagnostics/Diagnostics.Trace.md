---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Schreibt einen Ablaufverfolgungseintrag, wenn die Ablaufverfolgung aktiviert ist, und gibt den Wert zurück.


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

Schreibt einen Ablaufverfolgungseintrag "<code>message</code>", wenn die Ablaufverfolgung aktiviert ist, und gibt "<code>value</code>" zurück. Ein optionaler Parameter "<code>delayed</code>" gibt an, ob die Auswertung von "<code>value</code>" verzögert werden soll, bis die Nachricht nachverfolgt wurde. "<code>traceLevel</code>" kann einen der folgenden Werte annehmen:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Verfolgen Sie die Nachricht, bevor die Text.From-Funktion aufgerufen wird, und geben Sie das Ergebnis zurück.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
