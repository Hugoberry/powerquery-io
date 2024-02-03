---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Kreira tabelu od liste kolona i navedenih vrednosti.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Kreira tabelu tipa <code>columns</code> od liste <code>lists</code> koja sadrži ugnežđene liste sa imenima i vrednostima kolona.    Ako neke kolone imaju veći broj vrednosti od drugih, vrednosti koje nedostaju će biti popunjene podrazumevanom vrednošću, „bez vrednosti“, ako kolone mogu biti bez vrednosti.


## Examples

### Example #1 
Vraćanje tabele sa liste imena kupaca na listi. Svaka vrednost u stavki liste kupaca postaje vrednost reda, a svaka lista postaje kolona.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Kreiranje tabele od date liste kolona i liste imena kolona.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Kreiranje tabele sa različitim brojem kolona po redu. Vrednost reda koji nedostaje je bez vrednosti.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
