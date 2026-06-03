---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Expande uma coluna de registos em colunas com cada um dos valores.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Com base no `column` de registos existentes na entrada `table`, cria uma tabela com uma coluna para cada campo existente no registo. Opcionalmente, `newColumnNames` pode ser especificado para garantir nomes exclusivos para as colunas na tabela nova.

-   `table`: a tabela original com a coluna de registos a expandir.
-   `column`: a coluna a expandir.
-   `fieldNames`: a lista de campos a expandir nas colunas da tabela.
-   `newColumnNames`: a lista de nomes a atribuir às colunas novas. Os nomes das colunas novas não podem duplicar qualquer coluna na tabela nova.


## Examples

### Example #1
Expandir a coluna \[a\] existente na tabela `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` para 3 colunas "aa", "bb" e "cc".
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
