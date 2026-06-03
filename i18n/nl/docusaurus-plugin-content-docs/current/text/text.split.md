---
title: Text.Split
---

# Text.Split


Splitst tekst in een lijst tekstwaarden op basis van een opgegeven scheidingsteken.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Retourneert een lijst met tekstwaarden die het resultaat is van het splitsen van een tekstwaarde op basis van het opgegeven scheidingsteken.

-   `text`: de tekstwaarde die moet worden gesplitst.
-   `separator`: het scheidingsteken dat wordt gebruikt om de tekst te splitsen. Het scheidingsteken kan een enkel teken of een reeks tekens zijn. Als een reeks tekens wordt gebruikt, wordt de tekst alleen gesplitst bij instanties waar de exacte reeks voorkomt.


## Examples

### Example #1
Een lijst maken van de volgende tekstwaarde met het scheidingsteken "|": "Naam|Adres|Telefoonnummer".
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
Maak een lijst op basis van de tekstwaarde met een reeks tekens.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
