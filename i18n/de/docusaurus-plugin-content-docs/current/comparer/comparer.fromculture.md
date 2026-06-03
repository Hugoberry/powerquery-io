---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Gibt eine Vergleichsfunktion basierend auf der angegebenen Berücksichtigung von Kultur und Groß-/Kleinschreibung zurück.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Gibt eine Vergleichsfunktion zurück, die die Angabe "`culture`" und die durch `ignoreCase` angegebene Berücksichtigung von Groß-/Kleinschreibung zum Ausführen von Vergleichen verwendet.  
  
Eine Vergleichsfunktion akzeptiert zwei Argumente und gibt -1, 0 oder 1 zurück, je nachdem, ob der erste Wert im Vergleich zum zweiten kleiner, gleich oder größer ist.  
  
Der Standardwert für "`ignoreCase`" ist FALSE. "`culture`" muss eines der von .NET Framework unterstützten Gebietsschemas sein (z. B. "de-DE").


## Examples

### Example #1
Vergleichen Sie "a" und "A" mithilfe des Gebietsschemas "en-US", um festzustellen, ob die Werte gleich sind.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Vergleichen Sie "a" und "A" mithilfe des Gebietsschemas "en-US", und ignorieren Sie die Groß-/Kleinschreibung, um festzustellen, ob die Werte gleich sind.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
