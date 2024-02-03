---
title: Table.FirstN
---

# Table.FirstN


## Description

Vrací první zadané řádky počtu.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Vrací první řádek (řádky) tabulky <code>table</code> v závislosti na hodnotě <code>countOrCondition</code>:    <ul>    <li> Pokud je parametrem <code>countOrCondition</code> číslo, bude vrácen tento počet řádků (od začátku tabulky). </li>    <li> Pokud je parametrem <code>countOrCondition</code> podmínka, řádky splňující podmínku budou vráceny až po řádek, který podmínku nesplňuje.</li></ul>


## Examples

### Example #1 
Najde první dva řádky tabulky.
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Najde první řádky tabulky, pro které platí [a] &gt; 0.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
