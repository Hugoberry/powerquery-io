---
title: Text.PositionOf
---

# Text.PositionOf


Retourneert de eerste positie van de waarde (-1 als er niets worden gevonden).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Hiermee wordt de positie van de opgegeven herhaling geretourneerd van de tekstwaarde `substring` die is gevonden in `text`. Er kan een optionele parameter `occurrence` worden gebruikt om op te geven welke herhalingspositie moet worden geretourneerd (standaardwaarde is eerste herhaling). Retourneert -1 als `substring` niet is gevonden.

`comparer` is een `Comparer` die kan worden gebruikt voor het aansturen van de vergelijking. Vergelijkingsfuncties kunnen worden gebruikt om bij de vergelijking geen onderscheid te hoeven maken tussen hoofdletters en kleine letters of om bij de vergelijking rekening te houden met de cultuur en aard van de omgeving.

De volgende ingebouwde vergelijkingsfuncties kunnen in formules worden gebruikt:

-   `Comparer.Ordinal`: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd
-   `Comparer.OrdinalIgnoreCase`: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd waarbij geen onderscheid wordt gemaakt tussen hoofdletters en kleine letters
-   `Comparer.FromCulture`: waarmee vergelijkingen met inachtneming van de cultuur kunnen worden uitgevoerd


## Examples

### Example #1
De positie ophalen van de eerste instantie van "Wereld" in de tekst "Hallo, Wereld! Hallo, Wereld!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
De positie ophalen van de laatste instantie van 'Wereld. in de tekst 'Hallo, Wereld! Hallo, Wereld!'.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
