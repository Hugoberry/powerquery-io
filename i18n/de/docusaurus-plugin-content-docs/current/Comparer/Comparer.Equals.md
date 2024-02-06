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

Gibt einen <code>logischen</code> Wert basierend auf der Gleichheitsprüfung der beiden angegebenen Werte <code>x</code> und <code>y</code> mithilfe der Angabe von <code>comparer</code> zurück.      <div>        <code>comparer</code> ist ein <code>Comparer</code>, eine Vergleichsfunktion, die verwendet wird, um den Vergleich zu steuern.        Eine Vergleichsfunktion akzeptiert zwei Argumente und gibt -1, 0 oder 1 zurück, je nachdem, ob der erste Wert im Vergleich zum zweiten kleiner, gleich oder größer ist.        Vergleichsfunktionen können verwendet werden, um Vergleiche ohne Berücksichtigung der Groß-/Kleinschreibung oder mit Berücksichtigung von Kultur und Gebietsschema bereitzustellen.      </div>      <div>        Die folgenden integrierten Vergleichsfunktionen sind in der Formelsprache verfügbar:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Wird verwendet, um einen exakten Ordinalvergleich durchzuführen</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Wird verwendet, um einen exakten Ordinalvergleich ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen</li>        <li> <code>Comparer.FromCulture</code>: Wird verwendet, um einen Vergleich mit Berücksichtigung der Kultur durchzuführen</li>      </ul>


## Examples

### Example #1 
Vergleichen Sie &#34;1&#34; und &#34;A&#34; mithilfe des Gebietsschemas &#34;en-US&#34;, um festzustellen, ob die Werte gleich sind.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
