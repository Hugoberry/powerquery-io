---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Εγγράφει μια καταχώρηση ανίχνευσης, αν είναι ενεργοποιημένη η ανίχνευση, και επιστρέφει την τιμή.


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

Writes a trace `message`, if tracing is enabled, and returns `value`. An optional parameter `delayed` specifies whether to delay the evaluation of `value` until the message is traced. `traceLevel` can take one of the following values:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Ανίχνευση του μηνύματος πριν από την κλήση την συνάρτησης Text.From και επιστροφή του αποτελέσματος.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
