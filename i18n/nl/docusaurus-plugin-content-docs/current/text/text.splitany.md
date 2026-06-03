---
title: Text.SplitAny
---

# Text.SplitAny


Retourneert een lijst met tekstwaarden, en splitst bij elk van de tekens in het scheidingsteken.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Retourneert een lijst met tekstwaarden als gevolg van het splitsen van een tekstwaarde op basis van een teken dat is opgegeven in het scheidingsteken.

-   `text`: de tekstwaarde die moet worden gesplitst.
-   `separators`: de scheidingstekens die worden gebruikt om de tekst te splitsen.


## Examples

### Example #1
Maak een lijst van de opgegeven tekst met de opgegeven scheidingstekens.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
