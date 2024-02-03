---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

Εγγράφει μια ανίχνευση <code>message</code>, αν είναι ενεργοποιημένη η ανίχνευση, και επιστρέφει <code>value</code>. Μια προαιρετική παράμετρος <code>delayed</code> καθορίζει αν θα καθυστερήσει η αξιολόγηση του <code>value</code> μέχρι να ανιχνευτεί το μήνυμα. Το <code>traceLevel</code> μπορεί να πάρει μία από τις παρακάτω τιμές:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


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
