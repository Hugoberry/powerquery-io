---
title: Text.EndsWith
---

# Text.EndsWith


Geeft aan of de tekst op de opgegeven waarde eindigt.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven tekst, `text`, eindigt op de opgegeven waarde, `substring`. De indicatie is hoofdlettergevoelig.

`comparer`is een `Comparer` die wordt gebruikt voor het aansturen van de vergelijking. Vergelijkingsfuncties kunnen worden gebruikt om bij de vergelijking geen onderscheid te hoeven maken tussen hoofdletters en kleine letters of om bij de vergelijking rekening te houden met de cultuur en aard van de omgeving.

De volgende ingebouwde vergelijkingsfuncties kunnen in formules worden gebruikt:

-   `Comparer.Ordinal`: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd
-   `Comparer.OrdinalIgnoreCase`: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd waarbij geen onderscheid wordt gemaakt tussen hoofdletters en kleine letters
-   `Comparer.FromCulture`: waarmee vergelijkingen met inachtneming van de cultuur kunnen worden uitgevoerd


## Examples

### Example #1
Controleren of "Hallo, Wereld" eindigt op "wereld".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Controleren of "Hallo, Wereld" eindigt op "Wereld".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
