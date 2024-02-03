---
title: Table.LastN
---

# Table.LastN


## Description

Retorna el darrer nombre de files especificat.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Retorna la darrera o les darreres files de la taula <code>table</code> segons el valor de <code>countOrCondition</code>:    <ul>    <li> Si <code>countOrCondition</code> és un nombre, es retornarà el mateix nombre de files començant per la posició (end - <code>countOrCondition</code>). </li>    <li> Si <code>countOrCondition</code> és una condició, es retornaran les files que compleixen la condició en posició ascendent fins que una fila no compleixi la condició.</li></ul>


## Examples

### Example #1 
Cerca les darreres dues files de la taula.
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
Cerca les darreres files en què [a] &gt; 0 a la taula.
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
