---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Joint les lignes de deux tables qui correspondent approximativement en fonction des clés spécifiées.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Joint les lignes de <code>table1</code> aux lignes de <code>table2</code> en fonction de la correspondance approximative des valeurs des colonnes clés sélectionnées par <code>key1</code> (pour <code>table1</code>) et par <code>key2</code> (pour <code>table2</code>).<br />La correspondance approximative est une comparaison basée sur la similarité du texte plutôt que sur l'égalité du texte.<br />Par défaut, une jointure interne est effectuée, mais vous pouvez inclure une jointure <code>joinKind</code> facultative pour spécifier le type de jointure. Parmi les options, citons :    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br />Un ensemble facultatif de <code>joinOptions</code> peut être inclus pour spécifier comment comparer les colonnes clés. Parmi les options, citons :    <ul><li><code>ConcurrentRequests</code> : Nombre compris entre 1 et 8, qui sp&#233;cifie le nombre de threads parall&#232;les &#224; utiliser pour la correspondance approximative. La valeur par d&#233;faut est 1.</li><li><code>Culture</code> : Permet la mise en correspondance des enregistrements en fonction de r&#232;gles propres &#224; la culture. Il peut s’agir d’un nom de culture valide. Par exemple, l’option de culture &#171;&#160;ja-JP&#160;&#187; met en correspondance les enregistrements bas&#233;s sur la culture japonaise. La valeur par d&#233;faut est &quot;&quot;, qui met en correspondance en fonction d’une culture anglaise dite indiff&#233;rente.</li><li><code>IgnoreCase</code> : Valeur logique (true/false) qui autorise la correspondance de cl&#233;s qui ne respectent pas la casse. Par exemple, si la valeur est true, &#171;&#160;Raisins&#160;&#187; est mis en correspondance avec &#171;&#160;raisins&#160;&#187;. La valeur par d&#233;faut est true.</li><li><code>IgnoreSpace</code> : Valeur logique (true/false) qui permet la combinaison de parties de texte afin de trouver des correspondances. Par exemple, si la valeur est true, &#171;&#160;Rai sins&#160;&#187; correspond &#224; &#171;&#160;Raisins&#160;&#187;. La valeur par d&#233;faut est true.</li><li><code>NumberOfMatches</code> : Nombre entier qui sp&#233;cifie le nombre maximal de lignes correspondantes qui peuvent &#234;tre retourn&#233;es pour chaque ligne d’entr&#233;e. Par exemple, la valeur 1 retourne au plus une ligne correspondante pour chaque ligne d’entr&#233;e. Si cette option n’est pas sp&#233;cifi&#233;e, toutes les lignes correspondantes sont retourn&#233;es.</li><li><code>SimilarityColumnName</code> : Nom de la colonne qui montre la similarit&#233; entre une valeur d’entr&#233;e et la valeur repr&#233;sentative de cette entr&#233;e. La valeur par d&#233;faut est null, auquel cas aucune nouvelle colonne pour les similitudes n’est ajout&#233;e.</li><li><code>Threshold</code> : Nombre compris entre 0,00 et 1,00, qui sp&#233;cifie le score de similarit&#233; &#224; partir duquel deux valeurs sont mises en correspondance.Raisins    Par exemple, &#171;&#160;Raisins&#160;&#187; et &#171;&#160;Raiins&#160;&#187; (&#171;&#160;s&#160;&#187; manquant) correspondent uniquement si cette option est d&#233;finie sur une valeur inf&#233;rieure &#224; 0,90.    Un seuil de 1,00 autorise uniquement les correspondances exactes.s   (Notez qu’une &#171;&#160;correspondance exacte&#160;&#187; approximative ignorera peut-&#234;tre des diff&#233;rences, telles que la casse, l’ordre des mots et la ponctuation).    La valeur par d&#233;faut est 0,80.</li><li><code>TransformationTable</code> : Table qui permet de mettre en correspondance des enregistrements en fonction de mappages de valeurs personnalis&#233;s. Elle doit contenir des colonnes &#171;&#160;from&#160;&#187; et &#171;&#160;to&#160;&#187;. Par exemple, &#171;&#160;Grappes&#160;&#187; est mis en correspondance avec &#171;&#160;Raisins&#160;&#187; si une table de transformation est fournie avec la colonne &#171;&#160;from&#160;&#187; contenant &#171;&#160;Grappes&#160;&#187; et la colonne &#171;&#160;to&#160;&#187; contenant &#171;&#160;Raisins&#160;&#187;. Notez que la transformation est appliqu&#233;e &#224; toutes les occurrences du texte dans la table de transformation. Avec la table de transformation ci-dessus, &#171;&#160;Les grappes sont sucr&#233;es&#160;&#187; est &#233;galement mis en correspondance avec &#171;&#160;Les raisins sont sucr&#233;s&#160;&#187;.</li></ul><br />


## Examples

### Example #1 
Jointure approximative interne gauche de deux tables basées sur [FirstName]
```powerquery
Table.FuzzyJoin(
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
			  CustomerStateID = 1,
			  FirstName2 = "Bob",
			  State = "TX"
		],
    [
			  CustomerID = 1,
			  FirstName1 = "Bob",
			  Phone = "555-1234",
			  CustomerStateID = 2,
			  FirstName2 = "bOB",
			  State = "CA"
		],
    [
			  CustomerID = 2,
			  FirstName1 = "Robert",
			  Phone = "555-4567",
			  CustomerStateID = null,
			  FirstName2 = null,
			  State = null
		]
})
```




## Category
Table.Transformation
