---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Zachovává počáteční posun a pak střídavě přebírá a přeskakuje následující řádky.


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

Zachovává počáteční posun a pak střídavě přebírá a přeskakuje následující řádky.    <ul>       <li><code>table</code>: Vstupní tabulka</li>       <li><code>offset</code>: Počet řádků, které mají být zachovány před zahájením iterací</li>       <li><code>skip</code>: Počet řádků, které mají být při každé iteraci odebrány</li>       <li><code>take</code>: Počet řádků, které mají být při každé iteraci zachovány</li>    </ul>    


## Examples

### Example #1 
Vrátí tabulku z tabulky, která od prvního řádku přeskočí jednu hodnotu a pak jednu hodnotu zachová.
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
