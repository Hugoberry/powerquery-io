---
title: Text.TrimStart
---

# Text.TrimStart


Entfernt alle angegebenen führenden Zeichen.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Gibt das Ergebnis des Entfernens aller führenden Zeichen aus dem angegebenen `text` zurück. Standardmäßig werden alle führenden Leerzeichen entfernt.

-   `text`: Der Text, aus dem die führenden Zeichen entfernt werden sollen.
-   `trim`: Überschreibt die Leerzeichen, die standardmäßig gekürzt werden. Dieser Parameter kann ein einzelnes Zeichen oder eine Liste einzelner Zeichen sein. Jeder führenden Kürzungsvorgang wird beendet, wenn ein nicht gekürztes Zeichen erkannt wird.


## Examples

### Example #1
Entfernt die führenden Leerzeichen aus " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Entfernt führende Nullen aus der Textdarstellung einer Zahl.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Entfernen Sie die führenden Auffüllungszeichen aus einem Kontonamen mit fester Breite.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
