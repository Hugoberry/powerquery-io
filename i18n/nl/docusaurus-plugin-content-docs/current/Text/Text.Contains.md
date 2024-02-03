---
title: Text.Contains
---

# Text.Contains


## Description

Retourneert of de tekst al dan niet de subtekenreeks bevat.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Detecteert of <code>text</code> de waarde <code>substring</code> bevat. Retourneert true als de waarde wordt gevonden. Deze functie biedt geen ondersteuning voor jokertekens of reguliere expressies.      <br />      <br />      Het optionele argument <code>comparer</code> kan worden gebruikt om niet-hoofdlettergevoelige vergelijkingen of cultuur- en landspecifieke vergelijkingen op te geven.      De volgende ingebouwde vergelijkingsfuncties zijn beschikbaar in de formuletaal:      <ul>        <li><code>Comparer.Ordinal</code>: wordt gebruikt om een hoofdlettergevoelige ordinale vergelijking uit te voeren</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: wordt gebruikt om een niet-hoofdlettergevoelige ordinale vergelijking uit te voeren</li>        <li> <code>Comparer.FromCulture-</code>: wordt gebruikt om een cultuurbewuste vergelijking uit te voeren</li>      </ul>


## Examples

### Example #1 
Uitzoeken of de tekst &#34;Hallo wereld&#34; het woord &#34;Hallo&#34; bevat.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Uitzoeken of de tekst &#34;Hallo wereld&#34; het woord &#34;hallo&#34; bevat.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Zoeken of de tekst &#34;Hallo wereld&#34; &#39;hallo&#39; bevat, met behulp van een niet-hoofdlettergevoelige vergelijkingsfunctie.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
