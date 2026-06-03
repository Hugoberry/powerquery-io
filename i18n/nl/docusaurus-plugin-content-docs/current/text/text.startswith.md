---
title: Text.StartsWith
---

# Text.StartsWith


Geeft aan of de tekst met een opgegeven waarde begint.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Retourneert waar als tekstwaarde `text` begint met tekstwaarde `substring`.

-   `text`: een `text`\-waarde waarnaar moet worden gezocht.
-   `substring`: een `text`\-waarde die de subtekenreeks is waarnaar moet worden gezocht in `text`.
-   `comparer`: *\[optioneel\]* een `Comparer` die kan worden gebruikt voor het aansturen van de vergelijking. Bijvoorbeeld `Comparer.OrdinalIgnoreCase` kan worden gebruikt om zoekopdrachten uit te voeren die niet hoofdlettergevoelig zijn.

`comparer` is een `Comparer` die wordt gebruikt om de vergelijking te bepalen. Vergelijkingsfuncties kunnen worden gebruikt om bij de vergelijking geen onderscheid te hoeven maken tussen hoofdletters en kleine letters of om bij de vergelijking rekening te houden met de cultuur en aard van de omgeving.

De volgende ingebouwde vergelijkingsfuncties zijn beschikbaar in de formuletaal:

-   `Comparer.Ordinal`: wordt gebruikt om een exacte rangtelwoordvergelijking uit te voeren.
-   `Comparer.OrdinalIgnoreCase`: wordt gebruikt om een exacte niet-hoofdlettergevoelige rangtelwoordvergelijking uit te voeren.
-   `Comparer.FromCulture`: wordt gebruikt om een cultuurbewuste vergelijking uit te voeren.


## Examples

### Example #1
Controleren of de tekst "Hallo, Wereld" begint met "hallo".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Controleren of de tekst "Hallo, Wereld" begint met "Hallo".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Negeer hoofdlettergebruik en controleer of de tekst 'Hallo, Wereld' begint met 'hallo'.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
