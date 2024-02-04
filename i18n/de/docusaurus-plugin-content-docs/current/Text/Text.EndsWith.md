---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Gibt an, ob der Text auf den angegebenen Wert endet.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Gibt an, ob der angegebene Text <code>text</code> mit dem angegebenen Wert <code>substring</code> endet. Die Groß-/Kleinschreibung wird berücksichtigt.      <div>        <code>comparer</code> ist ein <code>Comparer</code> (eine Vergleichsfunktion), der verwendet wird, um den Vergleich zu steuern. Vergleichsfunktionen können verwendet werden, um Vergleiche ohne Berücksichtigung der Groß-/Kleinschreibung oder mit Berücksichtigung von Kultur und Gebietsschema bereitzustellen.      </div>      <div>        Die folgenden integrierten Vergleichsfunktionen sind in der Formelsprache verfügbar:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Wird verwendet, um einen exakten Ordinalvergleich durchzuführen</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Wird verwendet, um einen exakten Ordinalvergleich ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen</li>        <li> <code>Comparer.FromCulture</code>: Wird verwendet, um einen Vergleich mit Berücksichtigung der Kultur durchzuführen</li>      </ul>


## Examples

### Example #1 
Überprüft, ob &#34;Hello, World&#34; mit &#34;world&#34; endet.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Überprüft, ob &#34;Hello, World&#34; mit &#34;World&#34; endet.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
