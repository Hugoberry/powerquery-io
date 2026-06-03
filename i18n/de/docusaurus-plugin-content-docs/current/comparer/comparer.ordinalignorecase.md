---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Gibt eine Vergleichsfunktion zurück, die Aufzählungsregeln für den Vergleich von Werten ohne Berücksichtigung der Groß-/Kleinschreibung verwendet.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Gibt eine Vergleichsfunktion ohne Unterscheidung nach Groß-/Kleinschreibung zurück, die Ordinalregeln verwendet, um die angegebenen Werte `x` und `y` zu vergleichen.  
  
Eine Vergleichsfunktion akzeptiert zwei Argumente und gibt -1, 0 oder 1 zurück, je nachdem, ob der erste Wert im Vergleich zum zweiten kleiner, gleich oder größer ist.


## Examples

### Example #1
Vergleichen Sie "Abc" mit "abc", und verwenden Sie dazu Aufzählungsregeln, die nicht zwischen Groß- und Kleinschreibung unterscheiden. Hinweis: Bei Verwendung von `Comparer.Ordinal` ist "Abc" kleiner als "abc".
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
