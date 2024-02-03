---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


## Description

Joins the rows from the two tables that fuzzy match based on the given keys.


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


## Details

Joins the rows of <code>table1</code> with the rows of <code>table2</code> based on a fuzzy matching of the values of the key columns selected by <code>key1</code> (for <code>table1</code>) and <code>key2</code> (for <code>table2</code>).<br />Fuzzy matching is a comparison based on similarity of text rather than equality of text.<br />By default, an inner join is performed, however an optional <code>joinKind</code> may be included to specify the type of join. Options include:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />An optional set of <code>joinOptions</code> may be included to specify how to compare the key columns. Options include:    <ul><li><code>ConcurrentRequests</code> : A number between 1 and 8 that specifies the number of parallel threads to use for fuzzy matching. The default value is 1.</li><li><code>Culture</code> : Allows matching records based on culture-specific rules. It can be any valid culture name. For example, a Culture option of &quot;ja-JP&quot; matches records based on the Japanese culture. The default value is &quot;&quot;, which matches based on the Invariant English culture.</li><li><code>IgnoreCase</code> : A logical (true/false) value that allows case-insensitive key matching. For example, when true, &quot;Grapes&quot; is matched with &quot;grapes&quot;. The default value is true.</li><li><code>IgnoreSpace</code> : A logical (true/false) value that allows combining of text parts in order to find matches. For example, when true, &quot;Gra pes&quot; is matched with &quot;Grapes&quot;. The default value is true.</li><li><code>NumberOfMatches</code> : A whole number that specifies the maximum number of matching rows that can be returned for every input row. For example, a value of 1 will return at most one matching row for each input row. If this option is not provided, all matching rows are returned.</li><li><code>SimilarityColumnName</code> : A name for the column that shows the similarity between an input value and the representative value for that input. The default value is null, in which case a new column for similarities will not be added.</li><li><code>Threshold</code> : A number between 0.00 and 1.00 that specifies the similarity score at which two values will be matched.    For example, &quot;Grapes&quot; and &quot;Graes&quot; (missing the &quot;p&quot;) are matched only if this option is set to less than 0.90.    A threshold of 1.00 only allows exact matches.    (Note that a fuzzy &quot;exact match&quot; might ignore differences like casing, word order, and punctuation.)    The default value is 0.80.</li><li><code>TransformationTable</code> : A table that allows matching records based on custom value mappings. It should contain &quot;From&quot; and &quot;To&quot; columns. For example, &quot;Grapes&quot; is matched with &quot;Raisins&quot; if a transformation table is provided with the &quot;From&quot; column containing &quot;Grapes&quot; and the &quot;To&quot; column containing &quot;Raisins&quot;. Note that the transformation will be applied to all occurrences of the text in the transformation table. With the above transformation table, &quot;Grapes are sweet&quot; will also be matched with &quot;Raisins are sweet&quot;.</li></ul><br />    


## Examples

### Example #1 
Left inner fuzzy join of two tables based on [FirstName]
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
