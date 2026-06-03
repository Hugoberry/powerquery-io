---
title: Text.StartsWith
---

# Text.StartsWith


Gibt an, ob der Text mit einem angegebenen Wert beginnt.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Gibt WAHR zurück, wenn der Textwert `text` mit dem Textwert `substring` beginnt.

-   `text`: Ein `text`\-Wert, der durchsucht werden soll.
-   `substring`: Ein `text`\-Wert, der der Substring ist, nach dem in `text` gesucht werden soll.
-   `comparer`: *(Optional)* Ein `Comparer`, der zum Steuern des Vergleichs verwendet wird. Beispielsweise kann `Comparer.OrdinalIgnoreCase` verwendet werden, um Suchvorgänge ohne Beachtung der Groß-/Kleinschreibung durchzuführen.

`comparer` ist ein `Comparer`, der zum Steuern des Vergleichs verwendet wird. Vergleichsfunktionen können verwendet werden, um Vergleiche ohne Beachtung der Groß-/Kleinschreibung oder kultur- und gebietsschemabezogene Vergleiche bereitzustellen.

Die folgenden integrierten Vergleichsfunktionen sind in der Formelsprache verfügbar:

-   `Comparer.Ordinal`: Wird verwendet, um einen exakten Ordinalvergleich durchzuführen.
-   `Comparer.OrdinalIgnoreCase`: Wird verwendet, um einen exakten Ordinalvergleich ohne Beachtung der Groß-/Kleinschreibung durchzuführen.
-   `Comparer.FromCulture`: Wird verwendet, um einen kulturbezogenen Vergleich durchzuführen.


## Examples

### Example #1
Überprüft, ob der Text "Hello, World" mit dem Text "hello" beginnt.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Überprüft, ob der Text "Hello, World" mit dem Text "Hello" beginnt.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Die Groß-/Kleinschreibung wird ignoriert. Überprüfen Sie, ob der Text „Hello, World“ mit dem Text „hello“ beginnt.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
