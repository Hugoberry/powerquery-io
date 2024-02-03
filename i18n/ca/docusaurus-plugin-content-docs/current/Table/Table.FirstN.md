---
title: Table.FirstN
---

# Table.FirstN


## Description

Retorna les primeres files del recompte especificades.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Retorna la primera o les primeres files de la taula <code>table</code> segons el valor de <code>countOrCondition</code>:    <ul>    <li> Si <code>countOrCondition</code> és un nombre, es retornarà el mateix nombre de files (començant per dalt). </li>    <li> Si <code>countOrCondition</code> és una condició, es retornaran les files que compleixen la condició fins que una fila no compleixi la condició.</li></ul>


## Examples

### Example #1 
Cerca les primeres dues files de la taula.
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
Cerca les primeres files en què [a] &gt; 0 a la taula.
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
