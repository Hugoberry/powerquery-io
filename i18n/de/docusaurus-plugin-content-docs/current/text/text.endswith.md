---
title: Text.EndsWith
---

# Text.EndsWith


Gibt an, ob der Text auf den angegebenen Wert endet.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Gibt an, ob der angegebene Text `text` mit dem angegebenen Wert `substring` endet. Die Groß-/Kleinschreibung wird berücksichtigt.

`comparer` ist ein `Comparer` (eine Vergleichsfunktion), der verwendet wird, um den Vergleich zu steuern. Vergleichsfunktionen können verwendet werden, um Vergleiche ohne Berücksichtigung der Groß-/Kleinschreibung oder mit Berücksichtigung von Kultur und Gebietsschema bereitzustellen.

Die folgenden integrierten Vergleichsfunktionen sind in der Formelsprache verfügbar:

-   `Comparer.Ordinal`: Wird verwendet, um einen exakten Ordinalvergleich durchzuführen
-   `Comparer.OrdinalIgnoreCase`: Wird verwendet, um einen exakten Ordinalvergleich ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen
-   `Comparer.FromCulture`: Wird verwendet, um einen Vergleich mit Berücksichtigung der Kultur durchzuführen


## Examples

### Example #1
Überprüft, ob "Hello, World" mit "world" endet.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Überprüft, ob "Hello, World" mit "World" endet.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
