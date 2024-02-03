---
title: Table.FromRows
---

# Table.FromRows


## Description

Hiermee maakt u een tabel op basis van een lijst met rijwaarden en optionele kolommen


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Hiermee maakt u een tabel op basis van de lijst <code>rows</code>, waarbij elk element van de lijst een interne lijst is die de kolomwaarden voor één rij bevat. Voor <code>columns</code> kunt u een optionele lijst met kolomnamen, een tabeltype of een aantal kolommen opgeven.


## Examples

### Example #1 
Maakt een tabel met kolom [CustomerID] met daarin de waarden \{1, 2}, kolom [Name] met daarin de waarden \{&#34;Bob&#34;, &#34;Jim&#34;} en kolom [Phone] met de waarden \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
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
Retourneert een tabel met kolom [CustomerID] met daarin de waarden \{1, 2}, kolom [Name] met daarin de waarden \{&#34;Bob&#34;, &#34;Jim&#34;} en kolom [Phone] met de waarden \{&#34;123-4567&#34;, &#34;987-6543&#34;}, waarbij [CustomerID] een getaltype is en [Name] en [Phone] teksttypen.
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
