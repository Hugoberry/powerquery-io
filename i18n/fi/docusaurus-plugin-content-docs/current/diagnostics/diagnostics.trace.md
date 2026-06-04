---
title: Diagnostics.Trace
---

# Diagnostics.Trace


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


## Remarks

Kirjoittaa jäljityksen `message`, jos jäljitys on käytössä, ja palauttaa arvon `value`. Valinnainen parametri `delayed` määrittää, viivytetäänkö kohteen `value` arviointia, kunnes viesti jäljitetään. `traceLevel` voi ottaa jonkin seuraavista arvoista:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
