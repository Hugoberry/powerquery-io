---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Gibt eine Vergleichsfunktion zurück, die Aufzählungsregeln für den Vergleich von Werten ohne Berücksichtigung der Groß-/Kleinschreibung verwendet.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Gibt eine Vergleichsfunktion ohne Unterscheidung nach Groß-/Kleinschreibung zurück, die Ordinalregeln verwendet, um die angegebenen Werte <code>x</code> und <code>y</code> zu vergleichen.<br />        <br />        Eine Vergleichsfunktion akzeptiert zwei Argumente und gibt -1, 0 oder 1 zurück, je nachdem, ob der erste Wert im Vergleich zum zweiten kleiner, gleich oder größer ist.    


## Examples

### Example #1 
Vergleichen Sie &#34;Abc&#34; mit &#34;abc&#34;, und verwenden Sie dazu Aufzählungsregeln, die nicht zwischen Groß- und Kleinschreibung unterscheiden. Hinweis: Bei Verwendung von &lt;code&gt;Comparer.Ordinal&lt;/code&gt; ist &#34;Abc&#34; kleiner als &#34;abc&#34;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
