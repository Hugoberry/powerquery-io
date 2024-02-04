---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Transforma os nomes das colunas utilizando a função especificada.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Transforma os nomes das colunas através da função <code>nameGenerator</code> especificada. Opções válidas:    <div>      <code>MaxLength</code> especifica o comprimento máximo dos novos nomes de colunas. Se a função especificada resultar num nome de coluna maior, o nome longo será cortado.    </div>    <div>      <code>Comparer</code> é utilizado para controlar a comparação enquanto são gerados novos nomes de coluna. Os comparadores podem ser utilizados para fornecer comparações não sensíveis a maiúsculas e minúsculas ou comparações baseadas na cultura ou no local.    </div>    <div>      Os seguintes comparadores incorporados estão disponíveis na linguagem da fórmula:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: utilizado para executar uma comparação ordinal exata</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: utilizado para executar uma comparação ordinal exata não sensível a maiúsculas/minúsculas</li>      <li> <code>Comparer.FromCulture</code>: utilizado para executar uma comparação baseada na cultura</li>    </ul>    


## Examples

### Example #1 
Remover o caráter &lt;code&gt;#(tab)&lt;/code&gt; dos nomes de coluna
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Transformar nomes de coluna para gerar nomes não sensíveis a maiúsculas e minúsculas de comprimento 6.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
