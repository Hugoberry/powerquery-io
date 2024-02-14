---
title: Text.PositionOf
---

# Text.PositionOf


Gibt die erste Position des Werts zurück (oder &#34;- 1&#34;, falls der Wert nicht gefunden wird).


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

Gibt die Position des angegebenen Vorkommens des in <code>text</code> gefundenen Textwerts <code>substring</code> zurück.    Ein optionaler Parameter <code>occurrence</code> kann verwendet werden, um anzugeben, welche Vorkommensposition zurückgegeben werden soll (standardmäßig das erste Vorkommen).    Gibt -1 zurück, wenn <code>substring</code> nicht gefunden wurde.      <div>        <code>comparer</code> ist ein <code>Comparer</code> (eine Vergleichsfunktion), der verwendet wird, um den Vergleich zu steuern. Vergleichsfunktionen können verwendet werden, um Vergleiche ohne Berücksichtigung der Groß-/Kleinschreibung oder mit Berücksichtigung von Kultur und Gebietsschema bereitzustellen.      </div>      <div>        Die folgenden integrierten Vergleichsfunktionen sind in der Formelsprache verfügbar:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Wird verwendet, um einen exakten Ordinalvergleich durchzuführen</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Wird verwendet, um einen exakten Ordinalvergleich ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen</li>        <li> <code>Comparer.FromCulture</code>: Wird verwendet, um einen Vergleich mit Berücksichtigung der Kultur durchzuführen</li>      </ul>


## Examples

### Example #1 
Ruft die Position des ersten Vorkommens von &#34;World&#34; im Text &#34;Hello, World! Hello, World!&#34; ab.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Ruft die Position des letzten Vorkommens von &#34;World&#34; im Text &#34;Hello, World! Hello, World!&#34; ab.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
