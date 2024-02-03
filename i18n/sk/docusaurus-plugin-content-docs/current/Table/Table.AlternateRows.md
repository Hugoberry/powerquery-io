---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Zachová počiatočný posun, potom striedavo používa a vynecháva nasledujúce riadky.


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

Zachová počiatočný posun, potom striedavo používa a vynecháva nasledujúce riadky.    <ul>       <li><code>table</code>: Vstupná tabuľka.</li>       <li><code>offset</code>: Počet riadkov, ktoré sa majú zachovať pred spustením iterácií.</li>       <li><code>skip</code>: Počet riadkov, ktoré sa majú odstrániť v každej iterácii.</li>       <li><code>take</code>: Počet riadkov, ktoré sa majú zachovať v každej iterácii.</li>    </ul>    


## Examples

### Example #1 
Vráťte tabuľku z tabuľky, ktorá počnúc prvým riadkom vynechá jednu hodnotu a potom zachová jednu hodnotu.
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
