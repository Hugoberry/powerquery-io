---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Combina as colunas especificadas numa nova coluna de valor de registo, em que cada registo tem nomes de campo e valores correspondentes aos nomes e valores das colunas combinadas.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Combina as colunas especificadas de `table` numa nova coluna de valor recorde denominada `newColumnName` onde cada registo tem nomes de campo e valores correspondentes aos nomes e valores das colunas que foram combinadas. Se for especificado um registo para `options`, podem ser fornecidas as seguintes opções:

-   `DisplayNameColumn`: quando especificado como texto, indica que o nome da coluna fornecido deve ser tratado como o nome de apresentação do registo. Esta não precisa de ser uma das colunas do próprio registo.
-   do NomedoTipo: quando especificado como texto, fornece um nome de tipo lógico para o registo resultante que pode ser utilizado durante a carga de dados para conduzir o comportamento pelo ambiente de carga.



## Category
Table.Transformation
