---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Als tracering is ingeschakeld, wordt hiermee een traceervermelding geschreven en wordt de waarde geretourneerd.


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

Als tracering is ingeschakeld, wordt hiermee een tracering (<code>message</code>) geschreven en wordt <code>value</code> geretourneerd. Er wordt met een optionele parameter (<code>delayed</code>) opgegeven of de evaluatie van <code>value</code> moet worden uitgesteld totdat het bericht is getraceerd. <code>traceLevel</code> kan een van de volgende waarden hebben:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Het bericht traceren voordat de functie Text.From wordt aangeroepen en het resultaat retourneren.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
