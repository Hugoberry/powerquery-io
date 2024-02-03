---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Transforma nomes de colunas ao usar a função fornecida.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Transforma os nomes das colunas usando a função <code>nameGenerator</code> fornecida. Opções válidas:    <div>      <code>MaxLength</code> especifica o comprimento máximo dos novos nomes de coluna. Se a função fornecida resultar em um nome de coluna mais longo, o nome longo será cortado.    </div>    <div>      <code>Comparer</code> é usado para controlar a comparação enquanto gera novos nomes de coluna. Os comparadores podem ser usados ​​para fornecer comparações sem diferenciar maiúsculas de minúsculas ou com reconhecimento de cultura e localidade.    </div>    <div>      Os seguintes comparadores internos estão disponíveis na linguagem da fórmula:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: usado para realizar uma comparação ordinal exata</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: usado para realizar uma comparação ordinal exata sem diferenciar maiúsculas de minúsculas</li>      <li> <code>Comparer.FromCulture</code>: usado para realizar uma comparação com reconhecimento de cultura</li>    </ul>    


## Examples

### Example #1 
Remove o caractere &lt;code&gt;#(tab)&lt;/code&gt; dos nomes de colunas
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Transforme nomes de coluna para gerar nomes de comprimento 6 sem diferenciação de maiúsculas e minúsculas.
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
