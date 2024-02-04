---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

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


## Details

Combina as colunas especificadas de <code>table</code> numa nova coluna de valor recorde denominada <code>newColumnName</code> onde cada registo tem nomes de campo e valores correspondentes aos nomes e valores das colunas que foram combinadas. Se for especificado um registo para <code>options</code>, podem ser fornecidas as seguintes opções:    <ul>     <li> <code>DisplayNameColumn</code>: quando especificado como texto, indica que o nome da coluna fornecido deve ser tratado como o nome de apresentação do registo. Esta não precisa de ser uma das colunas do próprio registo.</li>     <li> <code></code> do NomedoTipo: quando especificado como texto, fornece um nome de tipo lógico para o registo resultante que pode ser utilizado durante a carga de dados para conduzir o comportamento pelo ambiente de carga.</li>    </ul>    



## Category
Table.Transformation
