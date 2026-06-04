---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Raksta izsekošanas ierakstu, ja izsekošana ir iespējota, un atgriež vērtību.


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

Raksta izsekošanu `message`, ja izsekošana ir iespējota, un atgriež `value`. Neobligāts parametrs `delayed` norāda, vai atlikt `value` novērtēšanu līdz ziņojuma izsekošanai. `traceLevel` var būt viena no šādām vērtībām:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Pirms funkcijas Text.From izsaukšanas izsekot ziņojumam un atgriezt rezultātu.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
