---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Išlaikomas pradinis poslinkis, tada kaitaliojamas šių eilučių įtraukimas ir praleidimas.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

Išlaikomas pradinis poslinkis, tada kaitaliojamas šių eilučių įtraukimas ir praleidimas.    <ul>       <li><code>table</code>: įvesties lentelė.</li>       <li><code>offset</code>: eilučių, kurias reikia palikti prieš pradedant įteracijas, skaičius.</li>       <li><code>skip</code>: eilučių, kurias reikia pašalinti kiekvienoje iteracijoje, skaičius.</li>       <li><code>take</code>: eilučių, kurias reikia palikiti kiekvienoje iteracijoje, skaičius.</li>    </ul>    


## Examples

### Example #1 
Sukurkite lentelę iš lentelės, kuri, pradedant nuo pirmosios eilutės, praleis 1 reikšmę, tada paliks 1 reikšmę.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
