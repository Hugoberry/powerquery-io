---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Transforma as linhas da tabela que usa a função de transformação especificada.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Cria uma <code>lista</code> aplicando a operação <code>transform</code> a cada linha em <code>table</code>.


## Examples

### Example #1 
Transforme as linhas de uma tabela em uma lista de números.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
Transforme as linhas de uma tabela numérica em registros textuais.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
