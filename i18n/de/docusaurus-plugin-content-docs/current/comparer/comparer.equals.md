---
title: Comparer.Equals
---

# Comparer.Equals


Gibt einen logischen Wert basierend auf der Gleichheitsprüfung über die beiden angegebenen Werte zurück.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Gibt einen `logischen` Wert basierend auf der Gleichheitsprüfung der beiden angegebenen Werte `x` und `y` mithilfe der Angabe von `comparer` zurück.

`comparer` ist ein `Comparer`, eine Vergleichsfunktion, die verwendet wird, um den Vergleich zu steuern. Eine Vergleichsfunktion akzeptiert zwei Argumente und gibt -1, 0 oder 1 zurück, je nachdem, ob der erste Wert im Vergleich zum zweiten kleiner, gleich oder größer ist. Vergleichsfunktionen können verwendet werden, um Vergleiche ohne Berücksichtigung der Groß-/Kleinschreibung oder mit Berücksichtigung von Kultur und Gebietsschema bereitzustellen.

Die folgenden integrierten Vergleichsfunktionen sind in der Formelsprache verfügbar:

-   `Comparer.Ordinal`: Wird verwendet, um einen exakten Ordinalvergleich durchzuführen
-   `Comparer.OrdinalIgnoreCase`: Wird verwendet, um einen exakten Ordinalvergleich ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen
-   `Comparer.FromCulture`: Wird verwendet, um einen Vergleich mit Berücksichtigung der Kultur durchzuführen


## Examples

### Example #1
Vergleichen Sie "1" und "A" mithilfe des Gebietsschemas "en-US", um festzustellen, ob die Werte gleich sind.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
