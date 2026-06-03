---
title: Table.FromRows
---

# Table.FromRows


Erstellt eine Tabelle aus einer Liste von Zeilenwerten und optionalen Spalten.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Erstellt eine Tabelle auf der Grundlage der Liste "`rows`", in der die einzelnen Elemente der Liste eine interne Liste mit den Spaltenwerten für eine einzelne Zeile bilden. Eine optionale Liste mit Spaltennamen, ein Tabellentyp oder eine Reihe von Spalten kann für "`columns`" angegeben werden.


## Examples

### Example #1
Gibt eine Tabelle mit der Spalte \[CustomerID\] mit den Werten \{1, 2\}, der Spalte \[Name\] mit den Werten \{"Bob", "Jim"\} und der Spalte \[Phone\] mit den Werten \{"123-4567", "987-6543"\} zurück.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2
Gibt eine Tabelle mit der Spalte \[CustomerID\] mit den Werten \{1, 2\}, der Spalte \[Name\] mit den Werten \{"Bob", "Jim"\} und der Spalte \[Phone\] mit den Werten \{"123-4567", "987-6543"\} zurück. Dabei ist \[CustomerID\] ein Zahlentyp, \[Name\] und \[Phone\] sind Texttypen.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
