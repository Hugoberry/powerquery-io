---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

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


## Details

Une as linhas de <code>table1</code> com as linhas de <code>table2</code> com base na correspondência difusa dos valores das colunas de chave selecionadas por <code>key1</code> (para <code>table1</code>) e <code>key2</code> (para <code>table2</code>). Os resultados são retornados em uma nova coluna chamada <code>newColumnName</code>.<br />A correspondência difusa é uma comparação com base na similaridade do texto, não na igualdade.<br />O <code>joinKind</code> opcional especifica o tipo de junção a ser executado. Por padrão, uma junção externa esquerda é executada quando não há um <code>joinKind</code> especificado. As opções incluem:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Um conjunto opcional de <code>joinOptions</code> pode ser incluído para especificar como comparar as colunas de chave. As opções incluem:    <ul><li><code>ConcurrentRequests</code> : Um n&#250;mero entre 1 e 8 que especifica o n&#250;mero de threads paralelos a serem usados para a correspond&#234;ncia difusa. O valor padr&#227;o &#233; 1.</li><li><code>Culture</code> : Permite corresponder registros com base em regras espec&#237;ficas da cultura. Pode ser qualquer nome de cultura v&#225;lido. Por exemplo, a op&#231;&#227;o de Cultura &quot;ja-JP&quot; corresponde registros com base na cultura Japonesa. O valor padr&#227;o &#233; &quot;&quot;, que corresponde registros com base na cultura Ingl&#234;s Invari&#225;vel.</li><li><code>IgnoreCase</code> : Um valor l&#243;gico (true/false) que permite a correspond&#234;ncia de chaves sem diferenciar mai&#250;sculas de min&#250;sculas. Por exemplo, quando &#233; true, &quot;Uvas&quot; &#233; correspondido com &quot;uvas&quot;. O valor padr&#227;o &#233; true.</li><li><code>IgnoreSpace</code> : Um valor l&#243;gico (true/false) que permite a combina&#231;&#227;o de partes de texto para encontrar correspond&#234;ncias. Por exemplo, quando &#233; true, &quot;U vas&quot; &#233; agrupado com &quot;Uvas&quot;. O valor padr&#227;o &#233; true.</li><li><code>NumberOfMatches</code> : Um n&#250;mero inteiro que especifica o n&#250;mero m&#225;ximo de linhas correspondentes que podem ser retornadas para cada linha de entrada. Por exemplo, o valor 1 retornar&#225; no m&#225;ximo uma linha correspondente para cada linha de entrada. Se essa op&#231;&#227;o n&#227;o for fornecida, todas as linhas correspondentes ser&#227;o retornadas.</li><li><code>SimilarityColumnName</code> : Um nome para a coluna que mostra a similaridade entre um valor de entrada e o valor representativo dessa entrada. O valor padr&#227;o &#233; nulo e, nesse caso, n&#227;o ser&#225; adicionada uma nova coluna de similaridades.</li><li><code>Threshold</code> : Um n&#250;mero entre 0,00 e 1,00 que especifica a pontua&#231;&#227;o de similaridade na qual dois valores ser&#227;o correspondidos.    Por exemplo, &quot;Uvas&quot; e &quot;Uas&quot; (sem o &quot;v&quot;) s&#227;o correspondidos apenas se esta op&#231;&#227;o estiver definida para menos de 0,90.    Um limite de 1,00 permite apenas correspond&#234;ncias exatas.    (Observe que uma &quot;correspond&#234;ncia exata&quot; difusa pode ignorar diferen&#231;as como mai&#250;sculas e min&#250;sculas, ordem das palavras e pontua&#231;&#227;o.)    O valor padr&#227;o &#233; 0,80.</li><li><code>TransformationTable</code> : Uma tabela que permite corresponder registros com base em mapeamentos de valores personalizados. Ela deve conter as colunas &quot;De&quot; e &quot;At&#233;&quot;. Por exemplo, &quot;Uvas&quot; &#233; correspondido com &quot;Passas&quot; quando uma tabela de transforma&#231;&#227;o &#233; fornecida com a coluna &quot;De&quot; contendo &quot;Uvas&quot; e a coluna &quot;At&#233;&quot; contendo &quot;Passas&quot;. Observe que a transforma&#231;&#227;o ser&#225; aplicada a todas as ocorr&#234;ncias do texto na tabela de transforma&#231;&#227;o. Com a tabela de transforma&#231;&#227;o acima, &quot;Uvas s&#227;o doces&quot; tamb&#233;m ser&#225; correspondido com &quot;Passas s&#227;o doces&quot;.</li></ul><br />


## Examples

### Example #1 
Junção difusa interna esquerda das duas tabelas com base em [FirstName]
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
