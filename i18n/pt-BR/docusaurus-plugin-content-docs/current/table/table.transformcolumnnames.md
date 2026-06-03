---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transforma nomes de colunas ao usar a função fornecida.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Transforma os nomes das colunas usando a função `nameGenerator` fornecida. Opções válidas:

`MaxLength` especifica o comprimento máximo dos novos nomes de coluna. Se a função fornecida resultar em um nome de coluna mais longo, o nome longo será cortado.

`Comparer` é usado para controlar a comparação enquanto gera novos nomes de coluna. Os comparadores podem ser usados ​​para fornecer comparações sem diferenciar maiúsculas de minúsculas ou com reconhecimento de cultura e localidade.

Os seguintes comparadores internos estão disponíveis na linguagem da fórmula:

-   `Comparer.Ordinal`: usado para realizar uma comparação ordinal exata
-   `Comparer.OrdinalIgnoreCase`: usado para realizar uma comparação ordinal exata sem diferenciar maiúsculas de minúsculas
-   `Comparer.FromCulture`: usado para realizar uma comparação com reconhecimento de cultura


## Examples

### Example #1
Remove o caractere `#(tab)` dos nomes de colunas
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
