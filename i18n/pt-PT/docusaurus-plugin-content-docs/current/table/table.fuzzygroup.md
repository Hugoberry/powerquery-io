---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Agrupa as filas na tabela com base na correspondência difusa de chaves.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

Agrupa as linhas de `table` por valores de correspondência difusa na coluna especificada, `key`, para cada linha. Para cada grupo, é criado um registo contendo as colunas de chaves (e os seus valores) juntamente com quaisquer colunas agregadas especificadas por `aggregatedColumns`. Esta função não pode garantir a devolução de uma ordem fixa de linhas.

Pode ser incluído um conjunto opcional de `options` para especificar como comparar as colunas de chaves. As opções incluem:

-   `Culture` : Permite o agrupamento de registos com base em regras específicas da cultura. Pode ser qualquer nome de cultura válido. Por exemplo, uma opção Cultura de "ja-JP" agrupa registos com base na cultura japonesa. O valor predefinido é "", o qual efetua o agrupamento com base na cultura Inglês Invariável.
-   `IgnoreCase` : Um valor lógico (verdadeiro/falso) que permite o agrupamento de chaves não sensíveis as maiúsculas e minúsculas. Por exemplo, quando for verdadeiro, "Uvas" é agrupado com "uvas". O valor predefinido é verdadeiro.
-   `IgnoreSpace` : Um valor lógico (verdadeiro/falso) que permite a combinação de partes de texto para encontrar grupos. Por exemplo, quando for verdadeiro, "U vas" é agrupado com "Uvas". O valor predefinido é verdadeiro.
-   `SimilarityColumnName` : Um nome para a coluna que mostra a semelhança entre um valor de entrada e o valor representativo dessa entrada. O valor predefinido é nulo. Nesse caso, não será adicionada uma nova coluna para semelhanças.
-   `Threshold` : Um número entre 0,00 e 1,00 que especifica a classificação de semelhança com base na qual serão agrupados dois valores. Por exemplo, "Pacto" e "Pato" (com um "c" em falta) só serão agrupados se esta opção estiver definida como inferior a 0,90. Um limiar de 1,00 só permite as correspondências exatas. Tenha em atenção que uma "correspondência exata" difusa poderá ignorar diferenças como a utilização de maiúsculas/minúsculas, a ordem das palavras e a pontuação. A predefinição é 0,80.
-   `TransformationTable` : Uma tabela que permite agrupar registos com base em mapeamentos de valores personalizados. Deve conter colunas "De" e "Para". Por exemplo, "Uvas" é agrupado com "Passas" se for fornecida uma tabela de transformação com a coluna "De" contendo "Uvas" e a coluna "Para" contendo "Passas". Note que a transformação será aplicada a todas as ocorrências do texto na tabela de transformação. Com a tabela de transformação acima, "As uvas são doces" também será agrupado com "As passas são doces".


## Examples

### Example #1
Agrupe a tabela e adicione uma coluna de agregação \[Count\] que contém o número de colaboradores em cada localização (`each Table.RowCount(_)`).
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
