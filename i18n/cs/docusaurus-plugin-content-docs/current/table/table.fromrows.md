---
title: Table.FromRows
---

# Table.FromRows


Vytvoří tabulku ze seznamu hodnot řádků a volitelných sloupců.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Vytvoří tabulku ze seznamu `rows`, kde každý element seznamu představuje vnitřní seznam obsahující hodnoty sloupců pro jeden řádek. Jako argument `columns` je možné zadat volitelný seznam názvů sloupců, typ tabulky nebo počet sloupců.


## Examples

### Example #1
Vrátí tabulku se sloupcem \[CustomerID\] s hodnotami \{1, 2\}, sloupcem \[Name\] s hodnotami \{"Bob", "Jim"\} a sloupcem \[Phone\] s hodnotami \{"123-4567", "987-6543"\}.
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
Vrátí tabulku se sloupcem \[CustomerID\] s hodnotami \{1, 2\}, sloupcem \[Name\] s hodnotami \{"Bob", "Jim"\} a sloupcem \[Phone\] s hodnotami \{"123-4567", "987-6543"\}, kde \[CustomerID\] je číselného typu a \[Name\] a \[Phone\] textového typu.
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
