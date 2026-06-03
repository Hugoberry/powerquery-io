---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


Executa uma junção difusa entre as tabelas nas colunas fornecidas e insere o resultado da junção em uma nova coluna.


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Une as linhas de `table1` com as linhas de `table2` com base na correspondência difusa dos valores das colunas de chave selecionadas por `key1` (para `table1`) e `key2` (para `table2`). Os resultados são retornados em uma nova coluna chamada `newColumnName`.

A correspondência difusa é uma comparação com base na similaridade do texto, não na igualdade.

O `joinKind` opcional especifica o tipo de junção a ser executado. Por padrão, uma junção externa esquerda é executada quando não há um `joinKind` especificado. As opções incluem:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Um conjunto opcional de `joinOptions` pode ser incluído para especificar como comparar as colunas de chave. As opções incluem:

-   `ConcurrentRequests` : Um número entre 1 e 8 que especifica o número de threads paralelos a serem usados para a correspondência difusa. O valor padrão é 1.
-   `Culture` : Permite corresponder registros com base em regras específicas da cultura. Pode ser qualquer nome de cultura válido. Por exemplo, a opção de Cultura "ja-JP" corresponde registros com base na cultura Japonesa. O valor padrão é "", que corresponde registros com base na cultura Inglês Invariável.
-   `IgnoreCase` : Um valor lógico (true/false) que permite a correspondência de chaves sem diferenciar maiúsculas de minúsculas. Por exemplo, quando é true, "Uvas" é correspondido com "uvas". O valor padrão é true.
-   `IgnoreSpace` : Um valor lógico (true/false) que permite a combinação de partes de texto para encontrar correspondências. Por exemplo, quando é true, "U vas" é agrupado com "Uvas". O valor padrão é true.
-   `NumberOfMatches` : Um número inteiro que especifica o número máximo de linhas correspondentes que podem ser retornadas para cada linha de entrada. Por exemplo, o valor 1 retornará no máximo uma linha correspondente para cada linha de entrada. Se essa opção não for fornecida, todas as linhas correspondentes serão retornadas.
-   `SimilarityColumnName` : Um nome para a coluna que mostra a similaridade entre um valor de entrada e o valor representativo dessa entrada. O valor padrão é nulo e, nesse caso, não será adicionada uma nova coluna de similaridades.
-   `Threshold` : Um número entre 0,00 e 1,00 que especifica a pontuação de similaridade na qual dois valores serão correspondidos. Por exemplo, "Uvas" e "Uas" (sem o "v") são correspondidos apenas se esta opção estiver definida para menos de 0,90. Um limite de 1,00 permite apenas correspondências exatas. (Observe que uma "correspondência exata" difusa pode ignorar diferenças como maiúsculas e minúsculas, ordem das palavras e pontuação.) O valor padrão é 0,80.
-   `TransformationTable` : Uma tabela que permite corresponder registros com base em mapeamentos de valores personalizados. Ela deve conter as colunas "De" e "Até". Por exemplo, "Uvas" é correspondido com "Passas" quando uma tabela de transformação é fornecida com a coluna "De" contendo "Uvas" e a coluna "Até" contendo "Passas". Observe que a transformação será aplicada a todas as ocorrências do texto na tabela de transformação. Com a tabela de transformação acima, "Uvas são doces" também será correspondido com "Passas são doces".


## Examples

### Example #1
Junção difusa interna esquerda das duas tabelas com base em \[FirstName\]
```powerquery
Table.FuzzyNestedJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    "NestedTable",
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        NestedTable = Table.FromRecords({
            [
                CustomerStateID = 1,
                FirstName2 = "Bob",
                State = "TX"
            ],
            [
                CustomerStateID = 2,
                FirstName2 = "bOB",
                State = "CA"
            ]
        })
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        NestedTable = Table.FromRecords({})
    ]
})
```




## Category
Table.Transformation
