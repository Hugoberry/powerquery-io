---
title: Table.LastN
---

# Table.LastN


## Description

Vrátí poslední zadaný počet řádků.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Vrací poslední řádek (řádky) tabulky <code>table</code> v závislosti na hodnotě <code>countOrCondition</code>:    <ul>    <li> Pokud je parametrem <code>countOrCondition</code> číslo, bude vrácen tento počet řádků od pozice (konec - <code>countOrCondition</code>). </li>    <li> Pokud je parametrem <code>countOrCondition</code> podmínka, řádky splňující podmínku budou vráceny ve vzestupné pozici až po řádek, který podmínku nesplňuje.</li></ul>


## Examples

### Example #1 
Najde poslední dva řádky tabulky.
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Najde poslední řádky tabulky, pro které platí [a] &gt; 0.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
