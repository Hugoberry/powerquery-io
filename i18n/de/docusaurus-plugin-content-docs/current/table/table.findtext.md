---
title: Table.FindText
---

# Table.FindText


Gibt alle Zeilen zurück, die den angegebenen Text in der Tabelle enthalten.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Gibt die Zeilen der Tabelle "<code>table</code>" zurück, die den Text "<code>text</code>" enthalten. Wird der Text nicht gefunden, wird eine leere Tabelle zurückgegeben.


## Examples

### Example #1 
Ermittelt die Zeilen in der Tabelle, die &#34;Bob&#34; enthalten.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
