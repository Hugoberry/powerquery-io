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

Associa as linhas de <code>table1</code> com as linhas de <code>table2</code> com base na correspondência difusa dos valores das colunas de chaves selecionadas por <code>key1</code> (para <code>table1</code>) e <code>key2</code> (para <code>table2</code>). Os resultados são devolvidos numa nova coluna com o nome <code>newColumnName</code>.<br />A correspondência difusa consiste numa comparação baseada na semelhança do texto e não na igualdade do mesmo.<br />O <code>joinKind</code> opcional especifica o tipo de associação a efetuar. Por predefinição, é efetuada uma associação externa à esquerda se não for especificado um <code>joinKind</code>. As opções incluem:    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br />Pode ser incluído um conjunto opcional de <code>joinOptions</code> para especificar de que forma comparar as colunas de chaves. As opções incluem:    <ul><li><code>ConcurrentRequests</code> : Um n&#250;mero entre 1 e 8 que especifica o n&#250;mero de threads paralelos a utilizar para a correspond&#234;ncia difusa. O valor predefinido &#233; 1.</li><li><code>Culture</code> : Permite a correspond&#234;ncia de registos com base em regras espec&#237;ficas da cultura. Pode ser qualquer nome de cultura v&#225;lido. Por exemplo, uma op&#231;&#227;o Cultura de &quot;ja-JP&quot; faz a correspond&#234;ncia de registos com base na cultura japonesa. O valor predefinido &#233; &quot;&quot;, o qual efetua a correspond&#234;ncia com base na cultura Ingl&#234;s Invari&#225;vel.</li><li><code>IgnoreCase</code> : Um valor l&#243;gico (verdadeiro/falso) que permite a correspond&#234;ncia de chaves n&#227;o sens&#237;veis a mai&#250;sculas e min&#250;sculas. Por exemplo, quando for verdadeiro, &quot;Uvas&quot; &#233; correspondido com &quot;uvas&quot;. O valor predefinido &#233; verdadeiro.</li><li><code>IgnoreSpace</code> : Um valor l&#243;gico (verdadeiro/falso) que permite a combina&#231;&#227;o de partes de texto para encontrar correspond&#234;ncias. Por exemplo, quando for verdadeiro, &quot;U vas&quot; &#233; correspondido com &quot;Uvas&quot;. O valor predefinido &#233; verdadeiro.</li><li><code>NumberOfMatches</code> : Um n&#250;mero inteiro que especifica o n&#250;mero m&#225;ximo de linhas correspondentes que podem ser devolvidas para cada linha de entrada. Por exemplo, um valor de 1 devolver&#225; no m&#225;ximo uma linha correspondente para cada linha de entrada. Se esta op&#231;&#227;o n&#227;o for fornecida, s&#227;o devolvidas todas as linhas correspondentes.</li><li><code>SimilarityColumnName</code> : Um nome para a coluna que mostra a semelhan&#231;a entre um valor de entrada e o valor representativo dessa entrada. O valor predefinido &#233; nulo. Nesse caso, n&#227;o ser&#225; adicionada uma nova coluna para semelhan&#231;as.</li><li><code>Threshold</code> : Um n&#250;mero entre 0,00 e 1,00 que especifica a classifica&#231;&#227;o de semelhan&#231;a com base na qual ser&#225; feita a correspond&#234;ncia entre dois valores.    Por exemplo, a correspond&#234;ncia entre &quot;Pacto&quot; e &quot;Pato&quot; (com um &quot;c&quot; em falta) s&#243; ser&#225; feita se esta op&#231;&#227;o estiver definida como inferior a 0,90.    Um limiar de 1,00 s&#243; permite as correspond&#234;ncias exatas.    Tenha em aten&#231;&#227;o que uma &quot;correspond&#234;ncia exata&quot; difusa poder&#225; ignorar diferen&#231;as como a utiliza&#231;&#227;o de mai&#250;sculas/min&#250;sculas, a ordem das palavras e a pontua&#231;&#227;o.    A predefini&#231;&#227;o &#233; 0,80.</li><li><code>TransformationTable</code> : Uma tabela que permite fazer a correspond&#234;ncia de registos com base em mapeamentos de valores personalizados. Deve conter colunas &quot;De&quot; e &quot;Para&quot;. Por exemplo, &quot;Uvas&quot; &#233; combinado com &quot;Passas&quot; se uma tabela de transforma&#231;&#227;o for fornecida com a coluna &quot;De&quot; contendo &quot;Uvas&quot; e a coluna &quot;Para&quot; contendo &quot;Passas&quot;. Note que a transforma&#231;&#227;o ser&#225; aplicada a todas as ocorr&#234;ncias do texto na tabela de transforma&#231;&#227;o. Com a tabela de transforma&#231;&#227;o acima, tamb&#233;m ser&#225; efetuada a correspond&#234;ncia de &quot;As uvas s&#227;o doces&quot; com &quot;As passas s&#227;o doces&quot;.</li></ul><br />


## Examples

### Example #1 
Associação à esquerda difusa interna de duas tabelas com base em [FirstName]
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
