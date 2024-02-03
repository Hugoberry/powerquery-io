---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Vrátí tabulku, ve které budou přeskočeny první zadané řádky počtu.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Vrátí tabulku, která neobsahuje zadaný první počet řádků (<code>countOrCondition</code>) tabulky <code>table</code>.    Počet odebraných řádků závisí na volitelném parametru <code>countOrCondition</code>.    <ul>    <li> Pokud je parametr <code>countOrCondition</code> vynechán, je odebrán pouze první řádek. </li>    <li> Pokud je parametrem <code>countOrCondition</code> číslo, bude odebrán tento počet řádků (od začátku tabulky). </li>    <li> Pokud je parametrem <code>countOrCondition</code> podmínka, řádky splňující podmínku budou odebrány až po řádek, který podmínku nesplňuje.</li>    </ul>


## Examples

### Example #1 
Odebere první řádek tabulky.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Odebere první dva řádky tabulky.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
Odebere první řádky tabulky, pro které platí [CustomerID] &lt;= 2.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
