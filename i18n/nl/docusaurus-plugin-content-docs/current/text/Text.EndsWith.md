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

Hiermee wordt aangegeven of de opgegeven tekst, <code>text</code>, eindigt op de opgegeven waarde, <code>substring</code>. De indicatie is hoofdlettergevoelig. <div>  <code>comparer</code>is een <code>Comparer</code> die wordt gebruikt voor het aansturen van de vergelijking. Vergelijkingsfuncties kunnen worden gebruikt om bij de vergelijking geen onderscheid te hoeven maken tussen hoofdletters en kleine letters of om bij de vergelijking rekening te houden met de cultuur en aard van de omgeving. </div> <div> De volgende ingebouwde vergelijkingsfuncties kunnen in formules worden gebruikt: </div> <ul> <li><code>Comparer.Ordinal</code>: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd</li> <li><code>Comparer.OrdinalIgnoreCase</code>: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd waarbij geen onderscheid wordt gemaakt tussen hoofdletters en kleine letters</li> <li> <code>Comparer.FromCulture</code>: waarmee vergelijkingen met inachtneming van de cultuur kunnen worden uitgevoerd</li> </ul>


## Examples

### Example #1 
Controleren of &#34;Hallo, Wereld&#34; eindigt op &#34;wereld&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Controleren of &#34;Hallo, Wereld&#34; eindigt op &#34;Wereld&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
