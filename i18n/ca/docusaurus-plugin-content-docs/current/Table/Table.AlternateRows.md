---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Manté el desplaçament inicial i després alterna prenent i ometent les files següents.


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

Manté el desplaçament inicial i després alterna prenent i ometent les files següents.    <ul>       <li><code>table</code>: la taula d'entrada.</li>       <li><code>offset</code>: el nombre de files que s'han de conservar abans d'iniciar les iteracions.</li>       <li><code>skip</code>: el nombre de files que s'han de suprimir en cada iteració.</li>       <li><code>take</code>: el nombre de files que s'han de conservar en cada iteració.</li>    </ul>    


## Examples

### Example #1 
Retorna una taula a partir de la taula que, començant per la primera fila, omet 1 valor i després conserva 1 valor.
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
