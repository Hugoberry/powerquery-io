---
title: Text.Trim
---

# Text.Trim


Entfernt alle angegebenen führenden und nachstehenden Zeichen.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Gibt das Ergebnis zurück, dass alle führenden und nachstehenden Zeichen aus dem angegebenen `text`entfernt wurden. Standardmäßig werden alle führenden und nachfolgenden Leerzeichen entfernt.

-   `text`: Der Text, aus dem die führenden und nachgestellten Zeichen entfernt werden sollen.
-   `trim`: Überschreibt die Leerzeichen, die standardmäßig gekürzt werden. Dieser Parameter kann ein einzelnes Zeichen oder eine Liste einzelner Zeichen sein. Jeder führende und nachfolgende Kürzungsvorgang wird beendet, wenn ein nicht gekürztes Zeichen erkannt wird.


## Examples

### Example #1
Entfernt die führenden und nachfolgenden Leerzeichen aus " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Entfernen Sie führende und nachfolgende Nullen aus der Textdarstellung einer Zahl.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Entfernen Sie die führenden und nachstehenden Klammern aus einem HTML-Tag.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Entfernen Sie die Sonderzeichen, die für den Status ausstehender Verkäufe verwendet werden.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
