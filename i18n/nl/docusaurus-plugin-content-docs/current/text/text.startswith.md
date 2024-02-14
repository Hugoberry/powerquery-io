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

Hiermee wordt true geretourneerd als de tekstwaarde <code>text</code> begint met de tekstwaarde <code>substring</code>. <ul> <li><code>text</code>: <i></i> Een <code>text</code>-waarde waarnaar moet worden gezocht</li> <li><code>substring</code>: <i></i> Een <code>text</code>-waarde die de subtekenreeks is waarnaar moet worden gezocht in <code>substring</code></li> <li><code>comparer</code>: <i>[Optioneel]</i>een <code>Comparer</code> die kan worden gebruikt voor het aansturen van de vergelijking. Bijvoorbeeld <code>Comparer.OrdinalIgnoreCase</code> kan worden gebruikt om zoekopdrachten uit te voeren die niet hoofdlettergevoelig zijn</li>      </ul>      <div>         <code>comparer</code> is een <code>Comparer</code> die wordt gebruikt om de vergelijking te bepalen. Vergelijkingsfuncties kunnen worden gebruikt om bij de vergelijking geen onderscheid te hoeven maken tussen hoofdletters en kleine letters of om bij de vergelijking rekening te houden met de cultuur en aard van de omgeving. </div> <div> De volgende ingebouwde vergelijkingsfuncties kunnen in formules worden gebruikt: </div> <ul> <li><code>Comparer.Ordinal</code>: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd</li> <li><code>Comparer.OrdinalIgnoreCase</code>: waarmee exacte ordinale vergelijkingen die niet hoofdlettergevoelig zijn</li> <li> <code>Comparer.FromCulture</code>: waarmee vergelijkingen met inachtneming van de cultuur kunnen worden uitgevoerd</li> </ul>


## Examples

### Example #1 
Controleren of de tekst &#34;Hallo, Wereld&#34; begint met &#34;hallo&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Controleren of de tekst &#34;Hallo, Wereld&#34; begint met &#34;Hallo&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
