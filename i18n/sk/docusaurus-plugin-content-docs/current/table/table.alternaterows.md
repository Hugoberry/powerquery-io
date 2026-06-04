---
title: Table.AlternateRows
---

# Table.AlternateRows


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


## Remarks

Zachová počiatočný posun, potom striedavo používa a vynecháva nasledujúce riadky.

-   `table`: Vstupná tabuľka.
-   `offset`: Počet riadkov, ktoré sa majú zachovať pred spustením iterácií.
-   `skip`: Počet riadkov, ktoré sa majú odstrániť v každej iterácii.
-   `take`: Počet riadkov, ktoré sa majú zachovať v každej iterácii.


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
