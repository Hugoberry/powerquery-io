---
title: Text.Contains
---

# Text.Contains


Gibt zurück, ob der Text die Teilzeichenfolge enthält.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Erkennt, ob `text` den Wert „`substring`“ enthält. Gibt WAHR zurück, wenn der Wert gefunden wurde. Diese Funktion unterstützt keine Platzhalter oder regulären Ausdrücke.  
  
Das optionale Argument „`comparer`“ kann verwendet werden, um Vergleiche ohne Beachtung der Groß-/Kleinschreibung oder kultur- und gebietsschemaabhängige Vergleiche anzugeben. Die folgenden integrierten Vergleiche sind in der Formelsprache verfügbar:

-   `Comparer.Ordinal`: Wird verwendet, um einen Ordinalvergleich mit Beachtung der Groß-/Kleinschreibung durchzuführen.
-   `Comparer.OrdinalIgnoreCase`: Wird verwendet, um einen Ordinalvergleich ohne Beachtung der Groß-/Kleinschreibung durchzuführen.
-   `Comparer.FromCulture`: Wird verwendet, um einen kulturabhängigen Vergleich durchzuführen.

Wenn das erste Argument NULL ist, gibt diese Funktion NULL zurück.  
  
Alle Zeichen werden wortwörtlich behandelt. Beispielsweise werden „DR“, „ DR“, „DR „ und „ DR “ nicht als gleich betrachtet.


## Examples

### Example #1
Ermittelt, ob der Text "Hello World" den Text "Hello" enthält.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Ermittelt, ob der Text "Hello World" den Text "hello" enthält.
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


### Example #4
Suchen Sie die Zeilen in einer Tabelle, die entweder „A-“ oder „7“ im Kontocode enthalten.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
