---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Combina as colunas especificadas em uma nova coluna com valor de registro, na qual cada registro tem nomes e valores de campo correspondentes aos nomes e valores de coluna das colunas combinadas.


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

Combina as colunas especificadas de <code>table</code> em uma nova coluna com valor de registro chamada <code>newColumnName</code> em que cada registro tem nomes de campos e valores correspondentes aos nomes de coluna e aos valores das colunas combinadas. Se um registro for especificado para <code>options</code>, as seguintes opções poderão ser fornecidas:     <ul>     <li> <code>DisplayNameColumn</code>: quando especificado como texto, indica que o nome de coluna especificado deve ser tratado como o nome de exibição do registro. Isso não precisa ser uma das colunas no próprio registro. </li>     <li> <code>TypeName</code>: quando especificado como texto, fornece um nome de tipo lógico para o registro resultante que pode ser usado durante o carregamento de dados para o comportamento de unidade pelo ambiente de carregamento. </li>    </ul>    



## Category
Table.Transformation
