---
title: Table.ReverseRows
---

# Table.ReverseRows


## Description

Palauttaa taulukon, jonka rivit ovat käänteisessä järjestyksessä.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Details

Palauttaa taulukon niin, että rivit syötteestä <code>table</code> ovat käänteisessä järjestyksessä.


## Examples

### Example #1 
Tee taulukon riveistä käänteiset.
```powerquery
Table.ReverseRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"]
})
```




## Category
Table.Row operations
