---
title: Table.FromRows
---

# Table.FromRows


## Description

Vytvoří tabulku ze seznamu hodnot řádků a volitelných sloupců.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Vytvoří tabulku ze seznamu <code>rows</code>, kde každý element seznamu představuje vnitřní seznam obsahující hodnoty sloupců pro jeden řádek. Jako argument <code>columns</code> je možné zadat volitelný seznam názvů sloupců, typ tabulky nebo počet sloupců.


## Examples

### Example #1 
Vrátí tabulku se sloupcem [CustomerID] s hodnotami \{1, 2}, sloupcem [Name] s hodnotami \{&#34;Bob&#34;, &#34;Jim&#34;} a sloupcem [Phone] s hodnotami \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
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
Vrátí tabulku se sloupcem [CustomerID] s hodnotami \{1, 2}, sloupcem [Name] s hodnotami \{&#34;Bob&#34;, &#34;Jim&#34;} a sloupcem [Phone] s hodnotami \{&#34;123-4567&#34;, &#34;987-6543&#34;}, kde [CustomerID] je číselného typu a [Name] a [Phone] textového typu.
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
