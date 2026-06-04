---
title: Table.FromRows
---

# Table.FromRows


Kreira tabelu od liste vrednosti redova i opcionalnih kolona.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Kreira tabelu od liste `rows`, pri čemu svaki element liste predstavlja unutrašnju listu koja sadrži vrednosti kolona za jedan red. Za `columns` se mogu navesti opcionalna lista imena kolona, tip tabele ili broj kolona.


## Examples

### Example #1
Vraćanje tabele sa kolonom \[IDKupca\] koja ima vrednosti \{1, 2\}, kolonom \[Ime\] koja ima vrednosti \{"Bob", "Jim"\}, kao i kolonom \[Telefon\] koja ima vrednosti \{"123-4567", "987-6543"\}.
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
Vraćanje tabele sa kolonom \[IDKupca\] koja ima vrednosti \{1, 2\}, kolonom \[Ime\] koja ima vrednosti \{"Bob", "Jim"\}, kao i kolonom \[Telefon\] koja ima vrednosti \{"123-4567", "987-6543"\}, pri čemu su \[IDKupca\], \[Ime\] i \[Telefon\] tipovi teksta.
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
