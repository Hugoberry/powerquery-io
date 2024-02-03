---
title: Text.PadStart
---

# Text.PadStart


## Description

Retourneert tekst met een opgegeven lengte door de opgegeven tekst aan het begin op te vullen.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Hiermee wordt een <code>text</code>-waarde geretourneerd die is aangevuld tot de lengte <code>count</code> door spaties in te voegen aan het begin van de tekstwaarde <code>text</code>. Een optioneel teken <code>character</code> kan worden gebruikt voor het opgeven van het teken dat wordt gebruikt voor de aanvulling. Het standaardteken voor aanvulling is een spatie.


## Examples

### Example #1 
Een tekstwaarde aan het begin opvullen tot een lengte van tien tekens.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
Een tekstwaarde aan het begin opvullen met het teken &#34;|&#34; zodat de tekst tien tekens lang is.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
