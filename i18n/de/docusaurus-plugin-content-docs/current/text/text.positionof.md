---
title: Text.PositionOf
---

# Text.PositionOf


Gibt die erste Position des Werts zurück (oder "- 1", falls der Wert nicht gefunden wird).


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

Gibt die Position des angegebenen Vorkommens des in `text` gefundenen Textwerts `substring` zurück. Ein optionaler Parameter `occurrence` kann verwendet werden, um anzugeben, welche Vorkommensposition zurückgegeben werden soll (standardmäßig das erste Vorkommen). Gibt -1 zurück, wenn `substring` nicht gefunden wurde.

`comparer` ist ein `Comparer` (eine Vergleichsfunktion), der verwendet wird, um den Vergleich zu steuern. Vergleichsfunktionen können verwendet werden, um Vergleiche ohne Berücksichtigung der Groß-/Kleinschreibung oder mit Berücksichtigung von Kultur und Gebietsschema bereitzustellen.

Die folgenden integrierten Vergleichsfunktionen sind in der Formelsprache verfügbar:

-   `Comparer.Ordinal`: Wird verwendet, um einen exakten Ordinalvergleich durchzuführen
-   `Comparer.OrdinalIgnoreCase`: Wird verwendet, um einen exakten Ordinalvergleich ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen
-   `Comparer.FromCulture`: Wird verwendet, um einen Vergleich mit Berücksichtigung der Kultur durchzuführen


## Examples

### Example #1
Ruft die Position des ersten Vorkommens von "World" im Text "Hello, World! Hello, World!" ab.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Ruft die Position des letzten Vorkommens von "World" im Text "Hello, World! Hello, World!" ab.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
