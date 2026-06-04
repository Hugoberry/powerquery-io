---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Palauttaa taulukon, jossa kaikille sarakkeille on lisätty etuliitteeksi annettu teksti.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Palauttaa taulukon, jossa kaikkiin sarakkeiden nimiin annetusta kohteesta `table` lisätään etuliitteeksi annettu teksti `prefix` ja piste muodossa `etuliite.SarakkeenNimi`.


## Examples

### Example #1
Lisää sarakkeiden nimiin etuliitteeksi "MyTable" taulukossa.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
