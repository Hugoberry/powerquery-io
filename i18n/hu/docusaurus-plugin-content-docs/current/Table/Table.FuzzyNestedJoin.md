---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Fuzzy illesztést végez a táblákon a megadott oszlopok használatával, és egy új oszlopban helyezi el az illesztés eredményeit.


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

A(z) <code>table1</code> és a(z) <code>table2</code> sorait kapcsolja össze a(z) <code>key1</code> (<code>table1</code>) és <code>key2</code> (<code>table2</code>) által kiválasztott kulcsoszlopok értékeinek fuzzy keresése alapján. Az eredményeket egy új, <code>newColumnName</code> nevű oszlopban adja vissza a rendszer.<br />A fuzzy keresés a szöveg hasonlóságán, nem pedig a minőségén alapuló összehasonlítás.<br />A választható <code>joinKind</code> adja meg az összekapcsolás típusát. Alapértelmezés szerint bal oldali külső illesztés lesz végrehajtva, ha nincs megadva <code>joinKind</code>. A választható lehetőségek a következők::    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Egy választható <code>joinOptions</code> készlet is megadható a kulcsoszlopok összehasonlítási módjának megadásához. A válaszható lehetőségek a következők:     <ul><li><code>ConcurrentRequests</code> : Egy 1 &#233;s 8 k&#246;z&#246;tti sz&#225;m, amely megadja a fuzzy keres&#233;shez haszn&#225;land&#243; p&#225;rhuzamos sz&#225;lak sz&#225;m&#225;t. Az alap&#233;rtelmezett &#233;rt&#233;k 1.</li><li><code>Culture</code> : Lehetőv&#233; teszi a rekordok kultur&#225;lisk&#246;rnyezet-specifikus szab&#225;lyok szerinti egyeztet&#233;s&#233;t. Ez lehet b&#225;rmilyen &#233;rv&#233;nyes kultur&#225;lisk&#246;rnyezet-n&#233;v. Ha p&#233;ld&#225;ul a Kultur&#225;lis k&#246;rnyezet be&#225;ll&#237;t&#225;s &#233;rt&#233;ke ja-JP, akkor a jap&#225;n kultur&#225;lis k&#246;rnyezet alapj&#225;n egyezteti a rekordokat. Az alap&#233;rtelmezett &#233;rt&#233;k a „”, amely a semleges angol kultur&#225;lis k&#246;rnyezet alapj&#225;n v&#233;gzi az egyeztet&#233;st.</li><li><code>IgnoreCase</code> : Egy logikai (igaz/hamis) &#233;rt&#233;k, amely lehetőv&#233; teszi a kulcsok kis-&#233;s nagybetűk megk&#252;l&#246;nb&#246;ztet&#233;se n&#233;lk&#252;li egyeztet&#233;s&#233;t. Igaz &#233;rt&#233;k eset&#233;n a „Szőlő” p&#233;ld&#225;ul egyezőnek minős&#252;l a „szőlő” sz&#243;val. Az alap&#233;rtelmezett &#233;rt&#233;k Igaz.</li><li><code>IgnoreSpace</code> : Egy logikai (igaz/hamis) &#233;rt&#233;k, amely lehetőv&#233; teszi a sz&#246;vegr&#233;szek kombin&#225;l&#225;s&#225;t az egyez&#233;sek keres&#233;s&#233;hez. Igaz &#233;rt&#233;k eset&#233;n a „Sző lő” p&#233;ld&#225;ul egyezőnek minős&#252;l a „Szőlő” sz&#243;val. Az alap&#233;rtelmezett &#233;rt&#233;k Igaz.</li><li><code>NumberOfMatches</code> : Egy eg&#233;sz sz&#225;m, amely megadja az egyező sorok maxim&#225;lis visszaadhat&#243; sz&#225;m&#225;t minden bemeneti sor eset&#233;ben. Az 1 &#233;rt&#233;k p&#233;ld&#225;ul az egyes bemeneti sorokkal legink&#225;bb egyező sort adja vissza. Ha ez a be&#225;ll&#237;t&#225;s nincs megadva, a rendszer az &#246;sszes egyező sort visszaadja.</li><li><code>SimilarityColumnName</code> : A bemeneti &#233;rt&#233;k &#233;s az adott bemenethez tartoz&#243; reprezentat&#237;v &#233;rt&#233;k k&#246;z&#246;tti hasonl&#243;s&#225;got &#225;br&#225;zol&#243; oszlop neve. Az alap&#233;rtelmezett &#233;rt&#233;k a null, amely esetben a rendszer nem ad meg egy &#250;j oszlopot a hasonl&#243;s&#225;goknak.</li><li><code>Threshold</code> : Egy 0,00 &#233;s 1,00 k&#246;z&#246;tti sz&#225;m, amely meghat&#225;rozza azt a hasonl&#243;s&#225;gi pontsz&#225;mot, amelyen k&#233;t &#233;rt&#233;k egyeztetve lesz.    P&#233;ld&#225;ul a „Szőlő” &#233;s a „Szlő” (hi&#225;nyz&#243; „ő” betűvel) csak akkor lesz egyeztetve, ha a be&#225;ll&#237;t&#225;s &#233;rt&#233;ke kisebb, mint 0,90.    Az 1,00 k&#252;sz&#246;b&#233;rt&#233;k csak a pontos egyez&#233;seket enged&#233;lyezi.    (Vegye figyelembe, hogy a fuzzy „pontos egyez&#233;s” figyelmen k&#237;v&#252;l hagyhat olyan k&#252;l&#246;nbs&#233;geket, mint p&#233;ld&#225;ul a kis- &#233;s nagybetűhaszn&#225;latot, a sz&#243;sorrendet &#233;s az &#237;r&#225;sjeleket.)    Az alap&#233;rtelmezett &#233;rt&#233;k 0,80.</li><li><code>TransformationTable</code> : Egy t&#225;bl&#225;zat, amely lehetőv&#233; teszi a rekordok egy&#233;ni &#233;rt&#233;kt&#225;rs&#237;t&#225;sok alapj&#225;n t&#246;rt&#233;nő egyeztet&#233;s&#233;t. Tartalmaznia kell a „From” &#233;s „To” oszlopokat. A „Szőlő” p&#233;ld&#225;ul akkor lesz egyeztetve a „Mazsola” sz&#243;val, ha meg van adva egy &#225;talak&#237;t&#225;si t&#225;bla, ahol a „From” oszlopban a „Szőlő” &#233;rt&#233;k, a „To” oszlopban pedig a „Mazsola” &#233;rt&#233;k szerepel. Vegye figyelembe, hogy az &#225;talak&#237;t&#225;s az &#225;talak&#237;t&#225;si t&#225;bl&#225;ban tal&#225;lhat&#243; &#246;sszes a sz&#246;vegelőfordul&#225;sra &#233;rv&#233;nyes lesz. A fenti &#225;talak&#237;t&#225;si t&#225;bla eset&#233;n p&#233;ld&#225;ul „A szőlő &#233;des” a „Mazsola &#233;des” kifejez&#233;ssel is egyeztetve lesz.</li></ul><br />


## Examples

### Example #1 
Két tábla bal oldali intelligens (fuzzy) belső illesztése [FirstName] alapján
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
