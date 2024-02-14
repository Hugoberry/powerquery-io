---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Agrupa linhas na tabela com base na correspondência difusa de chaves.


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

Agrupa as linhas de <code>table</code> pela correspondência difusa de valores na coluna especificada, <code>key</code>, para cada linha.    Para cada grupo, um registro é construído contendo as colunas de chave (e seus valores) juntamente com as colunas agregadas especificadas por <code>aggregatedColumns</code>.    Essa função não pode garantir o retorno de uma ordem fixa de linhas.    Um conjunto opcional de <code>options</code> pode ser incluído para especificar como comparar as colunas de chave. As opções incluem:     <ul><li><code>Culture</code> : Permite agrupar registros com base em regras espec&#237;ficas da cultura. Pode ser qualquer nome de cultura v&#225;lido. Por exemplo, a op&#231;&#227;o de Cultura &quot;ja-JP&quot; agrupa registros com base na cultura Japonesa. O valor padr&#227;o &#233; &quot;&quot;, que agrupa registros com base na cultura Ingl&#234;s Invari&#225;vel.</li><li><code>IgnoreCase</code> : Um valor l&#243;gico (true/false) que permite o agrupamento de chaves sem diferenciar mai&#250;sculas de min&#250;sculas. Por exemplo, quando &#233; true, &quot;Uvas&quot; &#233; agrupado com &quot;uvas&quot;. O valor padr&#227;o &#233; true.</li><li><code>IgnoreSpace</code> : Um valor l&#243;gico (true/false) que permite a combina&#231;&#227;o de partes de texto para encontrar grupos. Por exemplo, quando &#233; true, &quot;U vas&quot; &#233; agrupado com &quot;Uvas&quot;. O valor padr&#227;o &#233; true.</li><li><code>SimilarityColumnName</code> : Um nome para a coluna que mostra a similaridade entre um valor de entrada e o valor representativo dessa entrada. O valor padr&#227;o &#233; nulo e, nesse caso, n&#227;o ser&#225; adicionada uma nova coluna de similaridades.</li><li><code>Threshold</code> : Um n&#250;mero entre 0,00 e 1,00 que especifica a pontua&#231;&#227;o de similaridade na qual dois valores ser&#227;o agrupados.    Por exemplo, &quot;Uvas&quot; e &quot;Uas&quot; (sem o &quot;v&quot;) s&#227;o agrupados apenas se esta op&#231;&#227;o estiver definida para menos de 0,90.    Um limite de 1,00 permite apenas correspond&#234;ncias exatas.    (Observe que uma &quot;correspond&#234;ncia exata&quot; difusa pode ignorar diferen&#231;as como mai&#250;sculas, ordem das palavras e pontua&#231;&#227;o.)    O valor padr&#227;o &#233; 0,80.</li><li><code>TransformationTable</code> : Uma tabela que permite agrupar registros com base em mapeamentos de valores personalizados. Ela deve conter as colunas &quot;De&quot; e &quot;At&#233;&quot;. Por exemplo, &quot;Uvas&quot; &#233; agrupado com &quot;Passas&quot; quando uma tabela de transforma&#231;&#227;o &#233; fornecida com a coluna &quot;De&quot; contendo &quot;Uvas&quot; e a coluna &quot;At&#233;&quot; contendo &quot;Passas&quot;. Observe que a transforma&#231;&#227;o ser&#225; aplicada a todas as ocorr&#234;ncias do texto na tabela de transforma&#231;&#227;o. Com a tabela de transforma&#231;&#227;o acima, &quot;Uvas s&#227;o doces&quot; tamb&#233;m ser&#225; agrupado com &quot;Passas s&#227;o doces&quot;.</li></ul><br />    


## Examples

### Example #1 
Agrupar a tabela adicionando uma coluna de agregação [Count] que contém o número de funcionários em cada local (&#34;cada Table.RowCount(_))&#34;).
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
