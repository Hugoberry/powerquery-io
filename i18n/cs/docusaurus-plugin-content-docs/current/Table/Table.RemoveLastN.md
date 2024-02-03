---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Vrátí tabulku, ze které je odebráno posledních N řádků.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Vrátí tabulku, která neobsahuje posledních <code>countOrCondition</code> řádků tabulky <code>table</code>.        Počet odebraných řádků závisí na volitelném parametru <code>countOrCondition</code>.    <ul>    <li> Pokud je parametr <code>countOrCondition</code> vynechán, je odebrán pouze poslední řádek. </li>    <li> Pokud je parametrem <code>countOrCondition</code> číslo, bude odebrán tento počet řádků (od konce tabulky). </li>    <li> Pokud je parametrem <code>countOrCondition</code> podmínka, řádky splňující podmínku budou odebrány až po řádek, který podmínku nesplňuje.</li>    </ul>


## Examples

### Example #1 
Odebere poslední řádek tabulky.
```powerquery
Table.RemoveLastN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Odebere poslední řádky tabulky, pro které platí [CustomerID] &gt; 2.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
