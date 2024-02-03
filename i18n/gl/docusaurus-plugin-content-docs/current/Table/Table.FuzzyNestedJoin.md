---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Executa unha asociación parcial entre táboas en columnas fornecidas e produce o resultado da unión nunha nova columna.


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

Une as filas de <code>table1</code> coas filas de <code>table2</code> baseándose na coincidencia parcial dos valores das columnas clave seleccionadas por <code>key1</code> (para <code>table1</code>) e <code>key2</code> (para <code>table2</code>). Os resultados devólvense nunha columna nova denominada <code>newColumnName</code>.<br />A coincidencia parcial é unha comparación baseada na similitude do texto, non na igualdade deste.<br />O <code>joinKind</code> opcional especifica o tipo de asociación que realizar. Por defecto, execútase unha combinación externa esquerda se non se especifica ningún <code>joinKind</code>. As opcións inclúen:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Pode incluírse un conxunto opcional de <code>joinOptions</code> para especificar como realizar a comparación das columnas clave. As opcións inclúen:    <ul><li><code>ConcurrentRequests</code> : Un n&#250;mero entre 1 e 8 que especifica o n&#250;mero de subprocesos paralelos que se van usar para as coincidencias parciais. O valor predefinido &#233; 1.</li><li><code>Culture</code> : Permite buscar coincidencias en rexistros segundo regras espec&#237;ficas da referencia cultural. Pode ser calquera nome de referencia cultural v&#225;lido. Por exemplo, un opci&#243;n de referencia cultural de &quot;ja-JP&quot; agrupa rexistros segundo a referencia cultural Xapon&#233;s. O valor predefinido &#233; &quot;&quot;, que busca coincidencias segundo a referencia cultural Ingl&#233;s invariable.</li><li><code>IgnoreCase</code> : Valor l&#243;xico (verdadeiro/falso) que permite buscar coincidencias en claves sen diferenciar entre mai&#250;sculas e min&#250;sculas. Por exemplo, se &#233; verdadeiro, &quot;Grapes&quot; agr&#250;pase con &quot;grapes&quot;. O valor predefinido &#233; verdadeiro.</li><li><code>IgnoreSpace</code> : Valor l&#243;xico (verdadeiro/falso) que permite combinar partes de texto para buscar coincidencias. Por exemplo, se &#233; verdadeiro, &quot;Gra pes&quot; agr&#250;pase con &quot;Grapes&quot;. O valor predefinido &#233; verdadeiro.</li><li><code>NumberOfMatches</code> : N&#250;mero enteiro que especifica o n&#250;mero m&#225;ximo de filas coincidentes que se pode devolver para cada fila de entrada. Por exemplo, un valor de 1 devolver&#225; como m&#225;ximo unha fila coincidente para cada fila de entrada. Se non se fornece esta opci&#243;n, dev&#243;lvense todas as filas coincidentes.</li><li><code>SimilarityColumnName</code> : Nome para a columna que mostra a semellanza entre un valor de entrada e o valor representativo para a devandita entrada. O valor predefinido &#233; null e, nese caso, non se pode engadir unha columna para semellanzas nova.</li><li><code>Threshold</code> : N&#250;mero entre 0,00 e 1,00 que especifica a puntuaci&#243;n de semellanza na que se far&#225;n coincidir dous valores.    Por exemplo, &quot;Grapes&quot; e &quot;Graes&quot; (falta o &quot;p&quot;) fanse coincidir s&#243; se esta opci&#243;n est&#225; configurada en menos de 0,90.    Un limiar de 1,00 permite s&#243; coincidencias exactas.    (T&#233;&#241;ase en conta que unha “coincidencia exacta” aproximada pode ignorar diferenzas como mai&#250;sculas e min&#250;sculas, orde das palabras e puntuaci&#243;n).    O valor predefinido &#233; 0,80.</li><li><code>TransformationTable</code> : T&#225;boa que permite facer coincidir rexistros segundo asignaci&#243;ns de valores personalizadas. Debe conter as columnas &quot;Desde&quot; e &quot;At&#233;&quot;. Por exemplo, &quot;Grapes&quot; faise coincidir con &quot;Raisins&quot; se se fornece unha t&#225;boa de transformaci&#243;n na que a columna &quot;Desde&quot; conte&#241;a &quot;Grapes&quot; e a columna &quot;At&#233;&quot; conte&#241;a &quot;Raisins&quot;. Te&#241;a en conta que se aplicar&#225; a transformaci&#243;n a todas as ocorrencias do texto na t&#225;boa de transformaci&#243;n. Coa t&#225;boa de transformaci&#243;n anterior, &quot;Grapes are sweet&quot; faise coincidir tam&#233;n con &quot;Raisins are sweet&quot;.</li></ul><br />


## Examples

### Example #1 
Combinación parcial interna esquerda de dúas táboas baseadas en [FirstName]
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
