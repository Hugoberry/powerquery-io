---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Duu a terme una unió aproximada entre taules en columnes proporcionades i produeix el resultat de la unió en una columna nova.


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

Uneix les files de <code>table1</code> amb les de <code>table2</code> d'acord amb una coincidència aproximada dels valors de les columnes clau seleccionades per <code>key1</code> (per a <code>table1</code>) i <code>key2</code> (per a <code>table2</code>). Els resultats es tornen en una nova columna anomenada <code>newColumnName</code>.<br />La coincidència aproximada és una comparació basada en la similitud del text, més que no pas en el fet que sigui més o menys igual.<br />El valor opcional <code>joinKind</code> especifica el tipus d'unió que s'ha de dur a terme. Per defecte, es realitza una unió externa esquerra si no s'especifica <code>joinKind</code>. Les opcions inclouen:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Es pot incloure un conjunt opcional <code>joinOptions</code> per especificar com cal comparar les columnes clau. Les opcions inclouen:    <ul><li><code>ConcurrentRequests</code> : Nombre entre l&#39;1 i el 8 que especifica el nombre de fils paral&#183;lels que s&#39;utilitzaran per a la coincid&#232;ncia aproximada. El valor per defecte &#233;s 1.</li><li><code>Culture</code> : Permet la coincid&#232;ncia dels registres en funci&#243; de normes espec&#237;fiques de la cultura. Pot ser qualsevol nom de refer&#232;ncia cultural v&#224;lid. Per exemple, una opci&#243; de refer&#232;ncia cultural &quot;ja-JP&quot; crea coincid&#232;ncies entre els registres segons la cultura japonesa. El valor per defecte &#233;s &quot;&quot;, que crea coincid&#232;ncies basades en la refer&#232;ncia cultural invariable Angl&#232;s.</li><li><code>IgnoreCase</code> : Valor l&#242;gic (true o false) que permet la coincid&#232;ncia de claus que no diferencien entre maj&#250;scules i min&#250;scules. Per exemple, si &#233;s true, &quot;Grapes&quot; coincideix amb &quot;grapes&quot;. El valor per defecte &#233;s true.</li><li><code>IgnoreSpace</code> : Valor l&#242;gic (true o false) que permet la combinaci&#243; de parts del text per trobar coincid&#232;ncies. Per exemple, si &#233;s true, &quot;Gra pes&quot; coincideix amb &quot;Grapes&quot;. El valor per defecte &#233;s true.</li><li><code>NumberOfMatches</code> : Nombre enter que especifica el nombre m&#224;xim de files coincidents que es poden retornar per a cada fila d&#39;entrada. Per exemple, un valor d&#39;1 retornar&#224; com a m&#224;xim una fila coincident per a cada fila d&#39;entrada. Si no es proporciona aquesta opci&#243;, es retornaran totes les files coincidents.</li><li><code>SimilarityColumnName</code> : Nom de la columna que mostra la similitud entre un valor d&#39;entrada i el valor representatiu de l&#39;entrada. El valor per defecte &#233;s nul i, en aquest cas, no s&#39;afegir&#224; cap columna nova per a les similituds.</li><li><code>Threshold</code> : Nombre entre 0,00 i 1,00 que especifica la puntuaci&#243; de similitud en qu&#232; coincidiran dos valors.    Per exemple, &quot;Grapes&quot; i &quot;Graes&quot; (falta la &quot;p&quot;) nom&#233;s coincideixen si aquesta opci&#243; est&#224; definida amb un valor inferior a 0,90.    Un llindar d&#39;1,00 nom&#233;s permet coincid&#232;ncies exactes.    (Tingueu en compte que una &quot;coincid&#232;ncia exacta&quot; aproximada podria ignorar difer&#232;ncies com ara l&#39;&#250;s de maj&#250;scules i min&#250;scules, l&#39;ordre de les paraules i la puntuaci&#243;.)   &#183;El valor per defecte &#233;s 0,80.</li><li><code>TransformationTable</code> : Taula que permet crear coincid&#232;ncies dels registres en funci&#243; de les assignacions de valors personalitzats. Hauria de contenir les columnes &quot;From&quot; i &quot;To&quot;. Per exemple, &quot;Grapes&quot; coincideix amb &quot;Raisins&quot; si es proporciona una taula de transformaci&#243; amb una columna &quot;From&quot; que cont&#233; &quot;Grapes&quot; i una columna &quot;To&quot; que cont&#233; &quot;Raisins&quot;. Tingueu en compte que la transformaci&#243; s&#39;aplicar&#224; a totes les aparicions del text a la taula de transformaci&#243;. Amb la taula de transformaci&#243; anterior, &quot;Grapes are sweet&quot; tamb&#233; coincidir&#224; amb &quot;Raisins are sweet&quot;.</li></ul><br />


## Examples

### Example #1 
Unió aproximada interna esquerra de dues taules basada en [FirstName]
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
