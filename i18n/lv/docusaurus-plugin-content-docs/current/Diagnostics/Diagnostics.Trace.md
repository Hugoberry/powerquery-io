---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

Raksta izsekošanu <code>message</code>, ja izsekošana ir iespējota, un atgriež <code>value</code>. Neobligāts parametrs <code>delayed</code> norāda, vai atlikt vienuma <code>value</code> novērtēšanu līdz ziņojuma izsekošanas pabeigšanai. Parametram <code>traceLevel</code> var būt viena no tālāk norādītajām vērtībām:    <code>TraceLevel.Critical</code>,    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


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
