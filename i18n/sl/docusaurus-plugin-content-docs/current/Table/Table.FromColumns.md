---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Ustvari tabelo iz seznama stolpcev in navedenih vrednosti.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Ustvari tabelo vrste <code>columns</code> iz seznama <code>lists</code>, ki vsebuje ugnezdene sezname z imeni stolpcev in vrednostmi.    Če imajo nekateri stolpci več vrednosti kot drugi, bodo manjkajoče vrednosti napolnjene s privzeto vrednostjo "null", če stolpci lahko imajo ničelno vrednost.


## Examples

### Example #1 
Ustvarite tabelo iz seznama imen strank na seznamu. Vsaka vrednost na seznamu strank z elementi je pretvorjena v vrednost vrstice, vsak seznam pa v stolpec.
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
Ustvarite tabelo iz danega seznama stolpcev in seznama imen stolpcev.
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
Ustvarite tabelo z drugačnim številom stolpcev na vrstico. Manjkajoča vrednost vrstice je ničelna.
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
