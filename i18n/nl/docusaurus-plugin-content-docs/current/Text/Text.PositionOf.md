---
title: Text.PositionOf
---

# Text.PositionOf


## Description

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


## Details

Hiermee wordt de positie van de opgegeven herhaling geretourneerd van de tekstwaarde <code>substring</code> die is gevonden in <code>text</code>. Er kan een optionele parameter <code>occurrence</code> worden gebruikt om op te geven welke herhalingspositie moet worden geretourneerd (standaardwaarde is eerste herhaling). Retourneert -1 als <code>substring</code> niet is gevonden. <div>  <code>comparer</code> is een <code>Comparer</code> die kan worden gebruikt voor het aansturen van de vergelijking. Vergelijkingsfuncties kunnen worden gebruikt om bij de vergelijking geen onderscheid te hoeven maken tussen hoofdletters en kleine letters of om bij de vergelijking rekening te houden met de cultuur en aard van de omgeving. </div> <div> De volgende ingebouwde vergelijkingsfuncties kunnen in formules worden gebruikt: </div> <ul> <li><code>Comparer.Ordinal</code>: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd</li> <li><code>Comparer.OrdinalIgnoreCase</code>: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd waarbij geen onderscheid wordt gemaakt tussen hoofdletters en kleine letters</li> <li> <code>Comparer.FromCulture</code>: waarmee vergelijkingen met inachtneming van de cultuur kunnen worden uitgevoerd</li>  </ul>


## Examples

### Example #1 
De positie ophalen van de eerste instantie van &#34;Wereld&#34; in de tekst &#34;Hallo, Wereld! Hallo, Wereld!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
De positie ophalen van de laatste instantie van &#34;Wereld&#34; in de tekst &#34;Hallo, Wereld! Hallo, Wereld!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
