---
title: Table.FromRows
---

# Table.FromRows


Skapar en tabell från en lisa med radvärden och valfria kolumner


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Skapar en tabell från listan <code>rows</code> där varje element i listan är en inre lista som innehåller kolumnvärdena för en enskild rad. En valfri lista med kolumnnamn, en tabelltyp, eller ett antal kolumner kan tillhandahållas för <code>columns</code>.


## Examples

### Example #1 
Returnerar en tabell med kolumnen [CustomerID] med värdena \{1, 2} och kolumnen [Name] med värdena \{&#34;Bob&#34;, &#34;Jim&#34;}, och kolumnen [Phone] med värdena \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
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
Returnerar en tabell med kolumnen [CustomerID] med värdena \{1, 2}, kolumnen [Name] med värdena \{&#34;Bob&#34;, &#34;Jim&#34;} och kolumnen [Phone] med värdena \{&#34;123-4567&#34;, &#34;987-6543&#34;}, där [CustomerID] är en siffertyp och [Name] och [Phone] är texttyper.
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
