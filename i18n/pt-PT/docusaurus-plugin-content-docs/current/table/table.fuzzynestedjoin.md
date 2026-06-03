---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


Efetua uma junção difusa entre as tabelas nas colunas fornecidas e produz o resultado da junção numa nova coluna.


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

Associa as linhas de `table1` com as linhas de `table2` com base na correspondência difusa dos valores das colunas de chaves selecionadas por `key1` (para `table1`) e `key2` (para `table2`). Os resultados são devolvidos numa nova coluna com o nome `newColumnName`.

A correspondência difusa consiste numa comparação baseada na semelhança do texto e não na igualdade do mesmo.

O `joinKind` opcional especifica o tipo de associação a efetuar. Por predefinição, é efetuada uma associação externa à esquerda se não for especificado um `joinKind`. As opções incluem:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Pode ser incluído um conjunto opcional de `joinOptions` para especificar de que forma comparar as colunas de chaves. As opções incluem:

-   `ConcurrentRequests` : Um número entre 1 e 8 que especifica o número de threads paralelos a utilizar para a correspondência difusa. O valor predefinido é 1.
-   `Culture` : Permite a correspondência de registos com base em regras específicas da cultura. Pode ser qualquer nome de cultura válido. Por exemplo, uma opção Cultura de "ja-JP" faz a correspondência de registos com base na cultura japonesa. O valor predefinido é "", o qual efetua a correspondência com base na cultura Inglês Invariável.
-   `IgnoreCase` : Um valor lógico (verdadeiro/falso) que permite a correspondência de chaves não sensíveis a maiúsculas e minúsculas. Por exemplo, quando for verdadeiro, "Uvas" é correspondido com "uvas". O valor predefinido é verdadeiro.
-   `IgnoreSpace` : Um valor lógico (verdadeiro/falso) que permite a combinação de partes de texto para encontrar correspondências. Por exemplo, quando for verdadeiro, "U vas" é correspondido com "Uvas". O valor predefinido é verdadeiro.
-   `NumberOfMatches` : Um número inteiro que especifica o número máximo de linhas correspondentes que podem ser devolvidas para cada linha de entrada. Por exemplo, um valor de 1 devolverá no máximo uma linha correspondente para cada linha de entrada. Se esta opção não for fornecida, são devolvidas todas as linhas correspondentes.
-   `SimilarityColumnName` : Um nome para a coluna que mostra a semelhança entre um valor de entrada e o valor representativo dessa entrada. O valor predefinido é nulo. Nesse caso, não será adicionada uma nova coluna para semelhanças.
-   `Threshold` : Um número entre 0,00 e 1,00 que especifica a classificação de semelhança com base na qual será feita a correspondência entre dois valores. Por exemplo, a correspondência entre "Pacto" e "Pato" (com um "c" em falta) só será feita se esta opção estiver definida como inferior a 0,90. Um limiar de 1,00 só permite as correspondências exatas. Tenha em atenção que uma "correspondência exata" difusa poderá ignorar diferenças como a utilização de maiúsculas/minúsculas, a ordem das palavras e a pontuação. A predefinição é 0,80.
-   `TransformationTable` : Uma tabela que permite fazer a correspondência de registos com base em mapeamentos de valores personalizados. Deve conter colunas "De" e "Para". Por exemplo, "Uvas" é combinado com "Passas" se uma tabela de transformação for fornecida com a coluna "De" contendo "Uvas" e a coluna "Para" contendo "Passas". Note que a transformação será aplicada a todas as ocorrências do texto na tabela de transformação. Com a tabela de transformação acima, também será efetuada a correspondência de "As uvas são doces" com "As passas são doces".


## Examples

### Example #1
Associação à esquerda difusa interna de duas tabelas com base em \[FirstName\]
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
