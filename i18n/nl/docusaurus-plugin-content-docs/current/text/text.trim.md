---
title: Text.Trim
---

# Text.Trim


Hiermee verwijdert u alle opgegeven voorlopende en navolgende tekens.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retourneert het resultaat van het verwijderen van alle voorlopende en navolgende tekens uit de opgegeven `text`. Standaard worden alle voorlopende en navolgende spaties verwijderd.

-   `text`: de tekst waaruit de voorlopende en navolgende tekens moeten worden verwijderd.
-   `trim`: overschrijft de spaties die standaard zijn afgekapt. Deze parameter kan een enkel teken of een lijst met enkele tekens zijn. Elke voorlopende en navolgende knipbewerking wordt gestopt wanneer een niet-afgekapt teken wordt aangetroffen.


## Examples

### Example #1
Voorloop- en volgspaties verwijderen uit " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Verwijder voorlopende en navolgende nullen uit de tekstweergave van een nummer.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Verwijder de voorlopende en navolgende haken uit een HTML-tag.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Verwijder de speciale tekens die worden gebruikt bij een verkoopstatus die in behandeling is.
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
