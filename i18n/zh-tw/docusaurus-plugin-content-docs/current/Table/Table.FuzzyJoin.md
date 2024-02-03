---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


## Description

根據指定的索引鍵聯結兩份資料表中模糊比對的資料列。


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

依據 <code>key1</code> (代表 <code>table1</code>) 與 <code>key2</code> (代表 <code>table2</code>) 選取之索引鍵資料行的值所進行的模糊比對，聯結 <code>table1</code> 的資料列與 <code>table2</code> 的資料列。<br />模糊比對只會比較文字的相似度，不會要求文字完全一致。<br />預設會執行內部聯結，但可選擇是否要加入 <code>joinKind</code> 來指定聯結類型。選項包含:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />可以選擇納入一組 <code>joinOptions</code>，以指定如何比對索引鍵資料行。選項包含:    <ul><li><code>ConcurrentRequests</code> : 介於 1 到 8 之間的數字，指定要用於模糊比對的平行執行緒數目。預設值為 1。</li><li><code>Culture</code> : 允許依據文化特性專屬的規則比對記錄。其可以是任何有效的文化特性名稱。例如，&quot;ja-jp&quot; 的文化特性選項會根據日文文化特性為記錄分組。預設值為 &quot;&quot;，即不因文化特性而異 (英文) 進行比對。</li><li><code>IgnoreCase</code> : 邏輯 (true/false) 值，允許不區分大小寫的索引鍵比對。例如，若為 true，&quot;Grapes&quot; 會與 &quot;grapes&quot; 相符。預設值為 true。</li><li><code>IgnoreSpace</code> : 邏輯 (true/false) 值，允許合併文字部分以尋找相符項目。例如，若為 true，&quot;Gra pes&quot; 會與 &quot;Grapes&quot; 相符。預設值為 true。</li><li><code>NumberOfMatches</code> : 指定每個輸入資料列可傳回之相符資料列數目上限的整數。例如，值為 1 時，每個輸入資料列最多傳回一個相符的資料列。若未提供此選項，則會傳回所有相符的資料列。</li><li><code>SimilarityColumnName</code> : 顯示輸入值與該輸入之代表值之相似性的資料行名稱。預設值為 Null，表示將不會新增資料行顯示相似性。</li><li><code>Threshold</code> : 介於 0.00 到 1.00 之間的數字，指出比對兩個值所依據的相似度分數。   例如，只有在此選項設定為小於 0.90 時，「Grapes」才會與「Graes」(缺少「p」) 相符。    閾值 1.00 表示指定條件為完全相符。    (請注意，模糊的「完全相符」可能會忽略大小寫、字順序和標點符號等差異。)    預設值為 0.80。</li><li><code>TransformationTable</code> : 允許依據自訂值比對來比對記錄的資料表。其應包含 &quot;From&quot; 和 &quot;To&quot; 資料行。例如，如果提供轉換資料表，而 &quot;From&quot; 資料行包含 &quot;Grapes&quot;，且 &quot;To&quot; 資料行包含 &quot;Raisins&quot;，則 &quot;Grapes&quot; 會與 &quot;Raisins&quot; 相符。請注意，轉換會套用到轉換資料表中該文字出現的所有地方。使用上述轉換資料表時，&quot;Grapes are sweet&quot; 也會與 &quot;Raisins are sweet&quot; 相符。</li></ul><br />    


## Examples

### Example #1 
根據 [FirstName] 留下兩個資料表的內部模糊聯結
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
