---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Tiek izveidota tabula no kolonnu saraksta un norādītajām vērtībām.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Izveido tabulu ar tipu <code>columns</code> no saraksta <code>lists</code>, kas ietver ligzdotus sarakstus ar kolonnu nosaukumiem un vērtībām.    Ja atsevišķās kolonnās ir vairāk vērtību nekā citās, trūkstošās vērtības tiks aizpildītas ar noklusējuma vērtību Null, ja kolonnās var ietvert vērtību Null.


## Examples

### Example #1 
Izveidojiet tabulu no sarakstā esošo klientu vārdiem. Katra vērtība klientu saraksta vienībā kļūst par rindas vērtību, un katrs saraksts kļūst par kolonnu.
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
Izveidojiet tabulu no norādītā kolonnu saraksta un kolonnu nosaukumu saraksta.
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
Izveidojiet tabulu ar atšķirīgu kolonnu skaitu rindās. Trūkstošā rindas vērtība ir Null.
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
