---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Palauttaa taulukon, jossa kaikille sarakkeille on lisätty etuliitteeksi annettu teksti.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Palauttaa taulukon, jossa kaikkiin sarakkeiden nimiin annetusta kohteesta <code>table</code> lisätään etuliitteeksi annettu teksti <code>prefix</code> ja piste muodossa <code>prefix</code><code>.SarakkeenNimi</code>.


## Examples

### Example #1 
Lisää sarakkeiden nimiin etuliitteeksi &#34;MyTable&#34; taulukossa.
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
