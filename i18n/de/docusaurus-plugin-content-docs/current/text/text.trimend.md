---
title: Text.TrimEnd
---

# Text.TrimEnd


Entfernt alle angegebenen nachfolgenden Zeichen.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Gibt das Ergebnis des Entfernens aller nachgestellten Zeichen aus dem angegebenen `text` zurück. Standardmäßig werden alle nachfolgenden Leerzeichen entfernt.

-   `text`: Der Text, aus dem die nachgestellten Zeichen entfernt werden sollen.
-   `trim`: Überschreibt die Leerzeichen, die standardmäßig gekürzt werden. Dieser Parameter kann ein einzelnes Zeichen oder eine Liste einzelner Zeichen sein. Jeder nachfolgende Kürzungsvorgang wird beendet, wenn ein nicht gekürztes Zeichen erkannt wird.


## Examples

### Example #1
Entfernt die nachfolgenden Leerzeichen aus " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Entfernt nachfolgende Nullen aus einer Textdarstellung einer aufgefüllten Gleitkommazahl.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Entfernen Sie die nachstehenden Auffüllungszeichen aus einem Kontonamen mit fester Breite.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
