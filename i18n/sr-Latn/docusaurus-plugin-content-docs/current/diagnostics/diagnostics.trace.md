---
title: Diagnostics.Trace
---

# Diagnostics.Trace


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


## Remarks

Ispisuje zapis praćenja `message`, ako je praćenje omogućeno, i vraća `value`. Opcionalni parametar `delayed` navodi da li treba odložiti `value` procenu dok se poruka ne prati. `traceLevel` Može da preuzme neku od sledećih vrednosti:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
