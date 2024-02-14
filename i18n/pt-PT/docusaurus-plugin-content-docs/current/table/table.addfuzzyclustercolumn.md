---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Adiciona uma nova coluna com valores representativos obtidos por valores de agrupamento difusos da coluna especificada na tabela.


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

Adiciona uma nova coluna <code>newColumnName</code> a <code>table</code> com valores representativos de <code>columnName</code>. Os valores representativos são obtidos por valores de correspondência difusa em <code>columnName</code>, para cada linha.    Pode ser incluído um conjunto opcional de <code>options</code> para especificar como comparar as colunas de chaves. As opções incluem:    <ul><li><code>Culture</code> : Permite o agrupamento de registos com base em regras espec&#237;ficas da cultura. Pode ser qualquer nome de cultura v&#225;lido. Por exemplo, uma op&#231;&#227;o Cultura de &quot;ja-JP&quot; agrupa registos com base na cultura japonesa. O valor predefinido &#233; &quot;&quot;, o qual efetua o agrupamento com base na cultura Ingl&#234;s Invari&#225;vel.</li><li><code>IgnoreCase</code> : Um valor l&#243;gico (verdadeiro/falso) que permite o agrupamento de chaves n&#227;o sens&#237;veis as mai&#250;sculas e min&#250;sculas. Por exemplo, quando for verdadeiro, &quot;Uvas&quot; &#233; agrupado com &quot;uvas&quot;. O valor predefinido &#233; verdadeiro.</li><li><code>IgnoreSpace</code> : Um valor l&#243;gico (verdadeiro/falso) que permite a combina&#231;&#227;o de partes de texto para encontrar grupos. Por exemplo, quando for verdadeiro, &quot;U vas&quot; &#233; agrupado com &quot;Uvas&quot;. O valor predefinido &#233; verdadeiro.</li><li><code>SimilarityColumnName</code> : Um nome para a coluna que mostra a semelhan&#231;a entre um valor de entrada e o valor representativo dessa entrada. O valor predefinido &#233; nulo. Nesse caso, n&#227;o ser&#225; adicionada uma nova coluna para semelhan&#231;as.</li><li><code>Threshold</code> : Um n&#250;mero entre 0,00 e 1,00 que especifica a classifica&#231;&#227;o de semelhan&#231;a com base na qual ser&#227;o agrupados dois valores.    Por exemplo, &quot;Pacto&quot; e &quot;Pato&quot; (com um &quot;c&quot; em falta) s&#243; ser&#227;o agrupados se esta op&#231;&#227;o estiver definida como inferior a 0,90.    Um limiar de 1,00 s&#243; permite as correspond&#234;ncias exatas.    Tenha em aten&#231;&#227;o que uma &quot;correspond&#234;ncia exata&quot; difusa poder&#225; ignorar diferen&#231;as como a utiliza&#231;&#227;o de mai&#250;sculas/min&#250;sculas, a ordem das palavras e a pontua&#231;&#227;o.    A predefini&#231;&#227;o &#233; 0,80.</li><li><code>TransformationTable</code> : Uma tabela que permite agrupar registos com base em mapeamentos de valores personalizados. Deve conter colunas &quot;De&quot; e &quot;Para&quot;. Por exemplo, &quot;Uvas&quot; &#233; agrupado com &quot;Passas&quot; se for fornecida uma tabela de transforma&#231;&#227;o com a coluna &quot;De&quot; contendo &quot;Uvas&quot; e a coluna &quot;Para&quot; contendo &quot;Passas&quot;. Note que a transforma&#231;&#227;o ser&#225; aplicada a todas as ocorr&#234;ncias do texto na tabela de transforma&#231;&#227;o. Com a tabela de transforma&#231;&#227;o acima, &quot;As uvas s&#227;o doces&quot; tamb&#233;m ser&#225; agrupado com &quot;As passas s&#227;o doces&quot;.</li></ul><br />    


## Examples

### Example #1 
Encontre os valores representativos para a localização dos colaboradores.
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
