---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Mantém o deslocamento inicial, e alterna o uso e não uso das linhas a seguir.


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

Mantém o deslocamento inicial, e alterna o uso e não uso das linhas a seguir.    <ul>       <li><code>table</code>: A tabela de entrada.</li>       <li><code>offset</code>: O número de linhas a serem mantidos antes de iniciar as iterações.</li>       <li><code>skip</code>: O número de linhas a serem removidos em cada iteração.</li>       <li><code>take</code>: O número de linhas a serem mantidos em cada iteração.</li>    </ul>    


## Examples

### Example #1 
Retornar uma tabela a partir da tabela que, começando na primeira linha, ignora 1 valor e depois mantém 1 valor.
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
