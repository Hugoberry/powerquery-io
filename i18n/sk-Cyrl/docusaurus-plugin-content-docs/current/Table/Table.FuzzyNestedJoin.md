---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Vykoná približné spojenie medzi tabuľkami na zadaných stĺpcoch a vytvorí výsledok spojenia v novom stĺpci.


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

Spojí riadky tabuľky <code>table1</code> s riadkami tabuľky <code>table2</code> na základe približnej zhody kľúčových stĺpcov vybratých pomocou funkcie <code>key1</code> (pre tabuľku <code>table1</code>) a <code>key2</code> (pre tabuľku <code>table2</code>). Výsledky sa vrátia zobrazené v novom stĺpci s názvom <code>newColumnName</code>.<br />Približná zhoda predstavuje porovnanie založené na podobnosti textu, nie na jeho rovnakosti.<br />Voliteľná hodnota <code>joinKind</code> určuje typ spojenia, ktoré sa má vykonať. Ak sa nezadá hodnota <code>joinKind</code>, predvolene sa vykoná vonkajšie spojenie zľava. Možnosti:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Možno zahrnúť voliteľnú súpravu <code>joinOptions</code> na určenie spôsobu porovnávania kľúčových stĺpcov. Možnosti:    <ul><li><code>ConcurrentRequests</code> : Č&#237;slo medzi 1 a 8 určuj&#250;ce počet paraleln&#253;ch vl&#225;kien, ktor&#233; sa maj&#250; použiť na približn&#250; zhodu. Predvolen&#225; hodnota je 1.</li><li><code>Culture</code> : Povoľuje zhodn&#233; z&#225;znamy na z&#225;klade pravidiel špecifick&#253;ch pre jazykov&#250; verziu. M&#244;že &#237;sť o ľubovoľn&#253; platn&#253; n&#225;zov jazykovej verzie. Možnosť jazykovej verzie ja-JP napr&#237;klad posudzuje zhodu z&#225;znamov podľa japonskej jazykovej verzie. Predvolen&#225; hodnota je &quot;&quot;, ktor&#225; posudzuje zhodu na z&#225;klade invariantnej anglickej jazykovej verzie.</li><li><code>IgnoreCase</code> : Logick&#225; hodnota (true/false), ktor&#225; povoľuje posudzovanie zhody kľ&#250;čov bez rozlišovania veľk&#253;ch a mal&#253;ch p&#237;smen. Pri hodnote True sa napr&#237;klad v&#253;raz „Hrozno“ zhoduje s hodnotami „hrozno“. Predvolen&#225; hodnota je True.</li><li><code>IgnoreSpace</code> : Logick&#225; hodnota (true/false), ktor&#225; umožňuje skombinovať časti textu s cieľom n&#225;jsť zhody. Pri hodnote True sa napr&#237;klad v&#253;raz „Hro zno“ zhoduje s hodnotami „hrozno“. Predvolen&#225; hodnota je True.</li><li><code>NumberOfMatches</code> : Cel&#233; č&#237;slo určuj&#250;ce maxim&#225;lny počet zhodn&#253;ch riadkov, ktor&#233; sa daj&#250; vr&#225;tiť pre každ&#253; vstupn&#253; riadok. Hodnota 1 sa napr&#237;klad vr&#225;ti pri riadku s najv&#228;čšou zhodou pre každ&#253; vstupn&#253; riadok. Ak t&#225;to možnosť nie je zadan&#225;, vr&#225;tia sa všetky zhodn&#233; riadky.</li><li><code>SimilarityColumnName</code> : N&#225;zov stĺpca, ktor&#253; zobrazuje podobnosť medzi vstupnou a reprezentat&#237;vnou hodnotou dan&#233;ho vstupu. Predvolen&#225; hodnota je null. V takom pr&#237;pade sa neprid&#225; nov&#253; stĺpec pre podobnosti.</li><li><code>Threshold</code> : Č&#237;slo medzi 0,00 a 1,00 určuj&#250;ce sk&#243;re podobnosti, pri ktorom sa bud&#250; dve hodnoty zhodovať.    Hodnoty Hrozno“ a Hrono“ (ch&#253;ba p&#237;smeno z) sa napr&#237;klad zhoduj&#250; len vtedy, ak je t&#225;to možnosť nastaven&#225; na hodnotu nižšiu ako 0,90.    Prahov&#225; hodnota 1,00 povoľuje iba presn&#233; zhody.    (Upozorňujeme, že približn&#225; „presn&#225; zhoda“ m&#244;že ignorovať rozdiely, ako s&#250; mal&#233; a veľk&#233; p&#237;smen&#225;, slovosled a interpunkcia.)    Predvolen&#225; hodnota je 0,80.</li><li><code>TransformationTable</code> : Tabuľka, ktor&#225; povoľuje zhodn&#233; z&#225;znamy na z&#225;klade priraden&#237; vlastn&#253;ch hodn&#244;t. Mala by obsahovať stĺpce „From“ a „To“. Hodnota „Hrozno“ sa napr&#237;klad zhoduje s hodnotou „Hrozienko“, ak sa zad&#225; tabuľka transform&#225;cie, v ktorej stĺpec „From“ obsahuje v&#253;raz „Hrozno“ a stĺpec „To“ obsahuje v&#253;raz „Hrozienko“. Všimnite si, že transform&#225;cia sa použije na všetky v&#253;skyty textu v tabuľke transform&#225;cie. Pomocou vyššie uvedenej tabuľky transform&#225;cie sa aj hodnoty „Hrozno je sladk&#233;“ bud&#250; zhodovať s hodnotami „Hrozienko je sladk&#233;“.</li></ul><br />


## Examples

### Example #1 
Ľavé vnútorné približné spojenie dvoch tabuliek na základe [FirstName]
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
