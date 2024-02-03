---
title: Table.FromRows
---

# Table.FromRows


## Description

Luo taulukon riviarvojen ja valinnaisten sarakkeiden luettelosta


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Luo luettelosta <code>rows</code> taulukon, jossa luettelon kukin elementti on sisempi luettelo, joka sisältää yksittäisen rivin sarakearvot. Kohteelle <code>columns</code> voidaan antaa valinnainen sarakenimien luettelo, taulukkotyyppi tai sarakkeiden määrä.


## Examples

### Example #1 
Palauta taulukko, jonka sarakkeessa [CustomerID] on arvot \{1, 2}, sarakkeessa [Name] on arvot \{&#34;Bob&#34;, &#34;Jim&#34;} ja sarakkeessa [Phone] on arvot \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
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
Palauta taulukko, jonka sarakkeessa [CustomerID] on arvot \{1, 2}, sarakkeessa [Name] on arvot \{&#34;Bob&#34;, &#34;Jim&#34;} ja sarakkeessa [Phone] on arvot \{&#34;123-4567&#34;, &#34;987-6543&#34;} ja jossa [CustomerID] on lukutyyppi ja [Name] sekä [Phone] ovat tekstityyppejä.
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
