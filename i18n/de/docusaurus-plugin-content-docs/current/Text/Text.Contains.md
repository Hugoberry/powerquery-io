---
title: Text.Contains
---

# Text.Contains


## Description

Gibt zurück, ob der Text die Teilzeichenfolge enthält.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Erkennt, ob <code>text</code> den Wert <code>substring</code> enthält. Gibt TRUE zurück, wenn der Wert gefunden wird. Diese Funktion unterstützt keine Platzhalter oder regulären Ausdrücke.      <br />      <br />      Das optionale Argument <code>comparer</code> kann verwendet werden, um Vergleiche ohne Berücksichtigung der Groß-/Kleinschreibung oder mit Berücksichtigung von Kultur und Gebietsschema anzugeben.      Die folgenden integrierten Vergleichsfunktionen sind in der Formelsprache verfügbar:      <ul>        <li><code>Comparer.Ordinal</code>: Wird verwendet, um einen Ordinalvergleich mit Berücksichtigung der Groß-/Kleinschreibung durchzuführen</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Wird verwendet, um einen Ordinalvergleich ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen</li>        <li> <code>Comparer.FromCulture</code>: Wird verwendet, um einen Vergleich mit Berücksichtigung der Kultur durchzuführen</li>      </ul>


## Examples

### Example #1 
Ermittelt, ob der Text &#34;Hello World&#34; den Text &#34;Hello&#34; enthält.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob der Text &#34;Hello World&#34; den Text &#34;hello&#34; enthält.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Ermittelt, ob der Text „Hallo Welt“ „hallo“ enthält, mithilfe eines Vergleichs unter Berücksichtigung der Groß-/Kleinschreibung.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
