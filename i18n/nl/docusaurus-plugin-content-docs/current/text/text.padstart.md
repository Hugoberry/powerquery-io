---
title: Text.PadStart
---

# Text.PadStart


Retourneert tekst met een opgegeven lengte door de opgegeven tekst aan het begin op te vullen.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Hiermee wordt een `text`\-waarde geretourneerd die is aangevuld tot de lengte `count` door spaties in te voegen aan het begin van de tekstwaarde `text`. Een optioneel teken `character` kan worden gebruikt voor het opgeven van het teken dat wordt gebruikt voor de aanvulling. Het standaardteken voor aanvulling is een spatie.


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
Een tekstwaarde aan het begin opvullen met het teken "|" zodat de tekst tien tekens lang is.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
