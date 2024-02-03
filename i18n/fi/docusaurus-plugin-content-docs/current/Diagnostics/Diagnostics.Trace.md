---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Kirjoittaa jäljitysmerkinnän, jos jäljitys on käytössä, ja palauttaa arvon.


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

Kirjoittaa jäljityksen <code>message</code>, jos jäljitys on käytössä, ja palauttaa kohteen <code>value</code>. Valinnainen parametri <code>delayed</code> määrittää, viivytetäänkö kohteen <code>value</code> arviointia, kunnes sanoma on jäljitetty. <code>traceLevel</code> voi saada jonkin seuraavista arvoista:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code> ja    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Jäljitä sanoma ennen funktion Text.From käynnistämistä ja palauta tulos.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
