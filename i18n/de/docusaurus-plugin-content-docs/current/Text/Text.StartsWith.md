---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Gibt an, ob der Text mit einem angegebenen Wert beginnt.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Gibt TRUE zurück, wenn der Textwert <code>text</code> mit dem Textwert <code>substring</code> beginnt.      <ul>        <li><code>text</code>: <i></i> Ein <code>text</code>-Wert, der durchsucht werden soll</li>        <li><code>substring</code>: <i></i> Ein <code>text</code>-Wert, der die Teilzeichenfolge ist, nach der in <code>substring</code> gesucht werden soll</li>        <li><code>comparer</code>: <i>[Optional]</i> Ein <code>Comparer</code> (eine Vergleichsfunktion), der zum Steuern des Vergleichs verwendet wird. Beispielsweise kann <code>Comparer.OrdinalIgnoreCase</code> verwendet werden, um Suchvorgänge ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen</li>      </ul>      <div>        <code>comparer</code> ist ein <code>Comparer</code>, der verwendet wird, um den Vergleich zu steuern. Vergleichsfunktionen können verwendet werden, um Vergleiche ohne Berücksichtigung der Groß-/Kleinschreibung oder mit Berücksichtigung von Kultur und Gebietsschema bereitzustellen.      </div>      <div>        Die folgenden integrierten Vergleichsfunktionen sind in der Formelsprache verfügbar:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Wird verwendet, um einen exakten Ordinalvergleich durchzuführen</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Wird verwendet, um einen exakten Ordinalvergleich ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen</li>        <li> <code>Comparer.FromCulture</code>: Wird verwendet, um einen Vergleich mit Berücksichtigung der Kultur durchzuführen</li>      </ul>


## Examples

### Example #1 
Überprüft, ob der Text &#34;Hello, World&#34; mit dem Text &#34;hello&#34; beginnt.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Überprüft, ob der Text &#34;Hello, World&#34; mit dem Text &#34;Hello&#34; beginnt.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
