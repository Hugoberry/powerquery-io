---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Adiciona uma nova coluna com valores representativos obtidos pelos valores de agrupamento difuso da coluna especificada na tabela.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Adiciona uma nova coluna `newColumnName` a `table` com valores representantes de `columnName`. Os representantes são obtidos pela correspondência difusa de valores em `columnName`, para cada linha.

Um conjunto opcional de `options` pode ser incluído para especificar como comparar as colunas de chave. As opções incluem:

-   `Culture` : Permite agrupar registros com base em regras específicas da cultura. Pode ser qualquer nome de cultura válido. Por exemplo, a opção de Cultura "ja-JP" agrupa registros com base na cultura Japonesa. O valor padrão é "", que agrupa registros com base na cultura Inglês Invariável.
-   `IgnoreCase` : Um valor lógico (true/false) que permite o agrupamento de chaves sem diferenciar maiúsculas de minúsculas. Por exemplo, quando é true, "Uvas" é agrupado com "uvas". O valor padrão é true.
-   `IgnoreSpace` : Um valor lógico (true/false) que permite a combinação de partes de texto para encontrar grupos. Por exemplo, quando é true, "U vas" é agrupado com "Uvas". O valor padrão é true.
-   `SimilarityColumnName` : Um nome para a coluna que mostra a similaridade entre um valor de entrada e o valor representativo dessa entrada. O valor padrão é nulo e, nesse caso, não será adicionada uma nova coluna de similaridades.
-   `Threshold` : Um número entre 0,00 e 1,00 que especifica a pontuação de similaridade na qual dois valores serão agrupados. Por exemplo, "Uvas" e "Uas" (sem o "v") são agrupados apenas se esta opção estiver definida para menos de 0,90. Um limite de 1,00 permite apenas correspondências exatas. (Observe que uma "correspondência exata" difusa pode ignorar diferenças como maiúsculas, ordem das palavras e pontuação.) O valor padrão é 0,80.
-   `TransformationTable` : Uma tabela que permite agrupar registros com base em mapeamentos de valores personalizados. Ela deve conter as colunas "De" e "Até". Por exemplo, "Uvas" é agrupado com "Passas" quando uma tabela de transformação é fornecida com a coluna "De" contendo "Uvas" e a coluna "Até" contendo "Passas". Observe que a transformação será aplicada a todas as ocorrências do texto na tabela de transformação. Com a tabela de transformação acima, "Uvas são doces" também será agrupado com "Passas são doces".


## Examples

### Example #1
Encontre os valores representativos para a localização dos funcionários.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
