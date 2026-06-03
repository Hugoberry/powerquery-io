---
title: Text.SplitAny
---

# Text.SplitAny


Gibt eine Liste mit Textwerten zurück – geteilt an jedem der Zeichen des Trennzeichens.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Gibt eine Liste mit Textwerten zurück, für die ein Textwert auf der Grundlage eines im Trennzeichen angegebenen Zeichens aufgeteilt wurde.

-   `text`: Der zu teilende Textwert.
-   `separators`: Die Trennzeichen, die zum Teilen des Texts verwendet werden soll.


## Examples

### Example #1
Erstellen Sie eine Liste aus dem angegebenen Text mithilfe der angegebenen Trennzeichen.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
