---
title: Diagnostics.Trace
---

# Diagnostics.Trace


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


## Remarks

Schreibt eine Ablaufverfolgung „`message`“, wenn die Ablaufverfolgung aktiviert ist, und gibt `value`zurück. Ein optionaler Parameter `delayed` gibt an, ob die Auswertung von `value` verzögert werden soll, bis die Nachricht nachverfolgt wird. `traceLevel` kann einen der folgenden Werte annehmen:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
