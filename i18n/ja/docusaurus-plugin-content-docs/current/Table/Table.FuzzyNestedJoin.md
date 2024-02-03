---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

指定された列でテーブルのあいまい結合を実行し、結合の結果を新しい列に生成します。


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

<code>table1</code> の行と <code>table2</code> の行を、(<code>table1</code> の) <code>key1</code> と (<code>table2</code> の) <code>key2</code> で選択されたキー列の値のあいまい一致に基づいて結合します。結果は <code>newColumnName</code> という名前の新しい列に返されます。<br />あいまい一致は、テキストの同一性ではなくテキストの類似性に基づく比較です。<br />省略可能な <code>joinKind</code> は、実行する結合の種類を指定します。<code>joinKind</code> を指定しなかった場合、既定では、左外部結合が実行されます。オプションは次のとおりです。    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br /><code>joinOptions</code> の省略可能な設定を含めると、キー列の比較方法を指定できます。オプションは次のとおりです。    <ul><li><code>ConcurrentRequests</code> : あいまい一致に使用するパラレル スレッドの数を指定する、1 - 8 の数値です。既定値は 1 です。</li><li><code>Culture</code> : カルチャ固有のルールに基づくレコードの照合を許可します。任意の有効なカルチャ名を指定できます。たとえば、&quot;ja-JP&quot; のカルチャ オプションは、日本語カルチャに基づいてレコードを照合します。既定値は &quot;&quot; で、英語のインバリアント カルチャに基づいて照合します。</li><li><code>IgnoreCase</code> : 大文字と小文字を区別しないキーの照合を許可する論理値 (true/false) です。true の場合、たとえば &quot;Grapes&quot; は &quot;grapes&quot; と一致します。既定値は true です。</li><li><code>IgnoreSpace</code> : 一致を検索するために、テキストの一部の結合を許可する論理値 (true/false) です。true の場合、たとえば &quot;Gra pes&quot; は &quot;Grapes&quot; と一致します。既定値は true です。</li><li><code>NumberOfMatches</code> : 各入力行で返すことができる、一致する行の最大数を指定する整数です。たとえば値が 1 の場合、各入力行に対して最大で 1 つの一致する行が返されます。このオプションが指定されていない場合、すべての一致する行が返されます。</li><li><code>SimilarityColumnName</code> : 入力値とその入力の代表的な値の間の類似性を示す列の名前です。既定値は null で、類似性の新しい列は追加されません。</li><li><code>Threshold</code> : 2 つの値が一致する類似度スコアを指定する、0.00 - 1.00 の数値です。    たとえば、このオプションが 0.90 未満に設定されている場合、&quot;Grapes&quot; と &quot;Graes&quot; (&quot;p&quot; がない) は一致します。    しきい値 1.00 は、完全一致の場合のみ許可されます。    (あいまいな「完全一致」は、大文字/小文字の指定、文字の順序、句読点などの違いを無視する場合があることに注意してください。)    既定値は 0.80 です。</li><li><code>TransformationTable</code> : カスタム値のマッピングに基づくレコードの照合を許可するテーブルです。&quot;From&quot; 列と &quot;To&quot; 列が含まれている必要があります。たとえば、&quot;From&quot; 列に &quot;Grapes&quot;、&quot;To&quot; 列に &quot;Raisins&quot; が含まれる変換テーブルが指定されている場合、&quot;Grapes&quot; は &quot;Raisins&quot; と一致します。変換は、変換テーブルに含まれるテキストの出現すべてに対して適用されることにご注意ください。上述の変換テーブルの場合、&quot;Grapes are sweet&quot; も &quot;Raisins are sweet&quot; と一致します。</li></ul><br />


## Examples

### Example #1 
[FirstName] に基づく 2 つのテーブルの左内部あいまい結合
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
