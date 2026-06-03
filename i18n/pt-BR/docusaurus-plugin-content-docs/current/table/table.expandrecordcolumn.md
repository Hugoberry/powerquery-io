---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Expande uma coluna de registros em colunas com cada um dos valores.


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

Dada a `column` de registros na entrada `table`, crie uma tabela com uma coluna para cada campo no registro. Opcionalmente, `newColumnNames` pode ser especificado para assegurar nomes exclusivos para as colunas da nova tabela.

-   `table`: A tabela original com a coluna de registro a ser expandida.
-   `column`: A coluna a ser expandida.
-   `fieldNames`: A lista de campos a ser expandida em colunas na tabela.
-   `newColumnNames`: A lista de nomes de coluna a serem atribuídos às novas colunas. Os novos nomes de coluna não podem duplicar nenhuma coluna na nova tabela.


## Examples

### Example #1
Expanda a coluna \[a\] na tabela `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` em três colunas: "aa", "bb" e "cc".
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
