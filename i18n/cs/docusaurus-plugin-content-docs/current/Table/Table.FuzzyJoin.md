---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


## Description

Propojí dva ze řádky dvou tabulek, které se přibližně shodují na základě daných klíčů.


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

Spojí řádky tabulky <code>table1</code> s řádky tabulky <code>table2</code> na základě přibližného shody hodnot klíčových sloupců vybraných funkcí <code>key1</code> (pro tabulku <code>table1</code>) a <code>key2</code> (pro tabulku <code>table2</code>).<br />Přibližná shoda je porovnání založené na podobnosti, nikoli absolutní shodě textu.<br />Ve výchozím nastavení se provede vnitřní spojení, volitelně však jde zahrnout parametr <code>joinKind</code>, který určuje typ spojení. Možnosti:    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br />Zahrnutá může být volitelná sada <code>joinOptions</code> pro určení způsobu porovnávání klíčových sloupců. Možnosti:    <ul><li><code>ConcurrentRequests</code> : Č&#237;slo mezi 1 a 8 určuj&#237;c&#237; počet paraleln&#237;ch vl&#225;ken, kter&#233; se maj&#237; použ&#237;t pro přibližnou shodu. V&#253;choz&#237; hodnota je 1.</li><li><code>Culture</code> : Povoluje shodu z&#225;znamů podle pravidel specifick&#253;ch pro jazykovou verzi. Může to b&#253;t jak&#253;koli platn&#253; n&#225;zev jazykov&#233; verze. Např&#237;klad možnost jazykov&#225; verze pro skupiny „ja-JP“ posuzuje shodu z&#225;znamů podle japonsk&#233; jazykov&#233; verze. V&#253;choz&#237; hodnota je „“, kter&#225; posuzuje shodu na z&#225;kladě invariantn&#237; anglick&#233; jazykov&#233; verze.</li><li><code>IgnoreCase</code> : Logick&#225; hodnota (true/false), kter&#225; povoluje shodu kl&#237;čů bez rozlišov&#225;n&#237; velikosti p&#237;smen. Např&#237;klad při hodnotě true se „Hrozny“ shoduje s „hrozny“. V&#253;choz&#237; hodnota je true.</li><li><code>IgnoreSpace</code> : Logick&#225; hodnota (true/false), kter&#225; povoluje kombinov&#225;n&#237; č&#225;sti textu souč&#225;st&#237; za &#250;čelem naj&#237;t shody. Např&#237;klad při hodnotě true se „Hro zny“ shoduje s „Hrozny“. V&#253;choz&#237; hodnota je true.</li><li><code>NumberOfMatches</code> : Cel&#233; č&#237;slo určuj&#237;c&#237; maxim&#225;ln&#237; počet shodn&#253;ch ř&#225;dků, kter&#233; se daj&#237; vr&#225;tit, pro všechny ř&#225;dky vstupu. Např&#237;klad hodnota 1 vr&#225;t&#237; pro každ&#253; vstupn&#237; ř&#225;dek nejv&#253;še jeden shodn&#253; ř&#225;dek. Pokud tato možnost nen&#237; zadan&#225;, vr&#225;t&#237; se všechny shodn&#233; ř&#225;dky.</li><li><code>SimilarityColumnName</code> : N&#225;zev sloupce, kter&#253; zobrazuje podobnost mezi vstupn&#237; a reprezentativn&#237; hodnotou dan&#233;ho vstupu. V&#253;choz&#237; hodnota je null – v tomto př&#237;padě se nov&#253; sloupec pro podobnosti nepřid&#225;.</li><li><code>Threshold</code> : Č&#237;slo mezi 0,00 a 1,00, kter&#233; určuje sk&#243;re podobnosti, podle kter&#233;ho se budou porovn&#225;vat dvě hodnoty.    Např&#237;klad „Grapes“ a „Graes“ (chyb&#237; „p“) se shoduj&#237; jenom v př&#237;padě, že je tato možnost nastaven&#225; na hodnotu menš&#237; než 0,90.    Prahov&#225; hodnota 1,00 povoluje jenom přesnou shodu.    (Mějte na paměti, že přibližn&#225; shoda může ignorovat rozd&#237;ly, jako jsou mal&#225; a velk&#225; p&#237;smena, pořad&#237; slov nebo interpunkce.)     V&#253;choz&#237; hodnota je 0,80.</li><li><code>TransformationTable</code> : Tabulka, kter&#225; umožňuje určit shodu z&#225;znamů na z&#225;kladě mapov&#225;n&#237; vlastn&#237;ch hodnot. Mus&#237; obsahovat sloupce „Z“ a „Na“. Např&#237;klad „Hrozny“ se budou shodovat s „Hrozinky“, pokud se poskytne transformačn&#237; tabulka se sloupcem „Z“ obsahuj&#237;c&#237;m „Hrozny“ a sloupcem „Na“, kter&#253; obsahuje „Hrozinky“. Všimněte si, že se transformace použije na všechny v&#253;skyty textu v transformačn&#237; tabulce. Pomoc&#237; v&#253;še uveden&#233; transformačn&#237; tabulky se tak&#233; „Hrozny jsou sladk&#233;“ bude shodovat s „Hrozinky jsou sladk&#233;“.</li></ul><br />


## Examples

### Example #1 
Levé vnitřní přibližné spojení dvou tabulek na základě [FirstName]
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
