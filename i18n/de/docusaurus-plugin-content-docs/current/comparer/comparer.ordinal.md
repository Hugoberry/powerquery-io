---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Gibt eine Vergleichsfunktion zurück, die Aufzählungsregeln für den Vergleich von Werten verwendet.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Gibt eine Vergleichsfunktion zurück, die Ordinalregeln verwendet, um die angegebenen Werte `x` und `y` zu vergleichen.  
  
Eine Vergleichsfunktion akzeptiert zwei Argumente und gibt -1, 0 oder 1 zurück, je nachdem, ob der erste Wert im Vergleich zum zweiten kleiner, gleich oder größer ist.


## Examples

### Example #1
Vergleichen Sie mithilfe von Aufzählungsregeln, ob "encyclopædia" und "encyclopaedia" äquivalent sind. Beachten Sie, dass sie bei Verwendung von `Comparer.FromCulture("en-US")` äquivalent sind.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
