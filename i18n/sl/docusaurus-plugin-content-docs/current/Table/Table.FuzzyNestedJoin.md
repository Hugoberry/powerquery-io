---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Izvede delno združevanje tabel v podanih stolpcih in vrne rezultat združevanja v novem stolpcu.


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

Združi vrstice tabele <code>table1</code> z vrsticami tabele <code>table2</code> glede na delno ujemanje vrednosti stolpcev s ključem, ki jih izbereta <code>key1</code> (za <code>table1</code>) in <code>key2</code> (za <code>table2</code>). Rezultati so vrnjeni v nov stolpec z imenom <code>newColumnName</code>.<br />Delno ujemanje je primerjava, ki ne temelji na enakosti besedila, ampak na podrobnosti besedila.<br />Izbirna možnost <code>joinKind</code> določa vrsto združevanja, ki ga želite izvesti. Privzeto je izvedeno levo zunanje združevanje, če parameter <code>joinKind</code> ni določen. Možnosti vključujejo:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Vključuje lahko izbirni nabor parametrov <code>joinOptions</code>, s katerim določite način primerjave stolpcev s ključem. Možnosti vključujejo:    <ul><li><code>ConcurrentRequests</code> : Število med 1 in 8, ki določa število vzporednih niti za uporabo za mehko ujemanje. Privzeta vrednost je 1.</li><li><code>Culture</code> : Omogoča ujemanje zapisov na podlagi pravil, značilnih za kulturo. Uporabljeno je lahko katero koli veljavno ime kulture. Primer: če je možnost &#187;Kultura&#171; nastavljena na &#187;sl-SI&#171;, se zapisi ujemajo na podlagi slovenske kulture. Privzeta vrednost je &quot;&quot;, ki vsebuje skupine na podlagi nespremenljive angleške kulture.</li><li><code>IgnoreCase</code> : Logična vrednost (true/false), ki omogoča ujemanje ključev z razlikovanjem med velikimi in malimi črkami. Primer: če je &#187;true&#171;, se beseda &#187;Grozdje&#171; ujema z besedo &#187;grozdje&#171;. Privzeta vrednost je &#187;true&#171;.</li><li><code>IgnoreSpace</code> : Logična vrednost (true/false), ki omogoča kombiniranje delov besedila za iskanje ustreznic. Primer: če je &#187;true&#171;, se beseda &#187;Gro zdje&#171; ujema z besedo &#187;Grozdje&#171;. Privzeta vrednost je &#187;true&#171;.</li><li><code>NumberOfMatches</code> : Celo število, ki določa največje dovoljeno število ujemajočih se vrstic, ki jih je mogoče vrniti za vsako vhodno vrstico. Primer: vrednost 1 bo na primer vrnila največ eno ujemajočo se vrstico za vsako vhodno vrstico. Če ta možnost ni navedena, so vrnjene vse ujemajoče se vrstice.</li><li><code>SimilarityColumnName</code> : Ime stolpca, ki prikazuje podobnost med vhodno in reprezentativno vrednostjo za ta vnos. Privzeta vrednost je ničelna, ki ne doda novega stolpca za podobnosti.</li><li><code>Threshold</code> : Število med 0,00 in 1,00, ki določa stopnjo podobnosti, pri kateri se bosta dve vrednosti ujemali.    Na primer, &#187;grozdje&#171; in &#187;grodje&#171; (brez črke &#187;z&#171;) se ujemata le, če je ta možnost nastavljena na manj kot 0,90.    Prag 1,00 omogoča le natančna ujemanja.    (Upoštevajte, da se pri nejasnem &#187;natančnem ujemanju&#171; lahko zanemarijo razlike, kot so črkovanje, besedni red in ločila.)    Privzeta vrednost je 0,80.</li><li><code>TransformationTable</code> : Tabela, ki omogoča ujemanje zapisov na podlagi preslikav vrednosti po meri. Vsebovati mora stolpca &#187;Iz&#171; in &#187;V&#171;. Primer: beseda &#187;Grozdje&#171; se ujema z besedo &#187;Rozine&#171;, če je v tabeli pretvorbe naveden stolpec &#187;Iz&#171;, ki vsebuje &#187;Grozdje&#171;, in stolpec &#187;V&#171;, ki vsebuje &#187;Rozine&#171;. Upoštevajte, da bo pretvorba uporabljena za vse ponovitve besedila v tabeli pretvorbe. Z zgornjo tabelo pretvorbe se bo besedna zveza &#187;Grozdje je sladko&#171; ujemala tudi z besedno zvezo &#187;Rozine so sladke&#171;.</li></ul><br />


## Examples

### Example #1 
Levo notranje delno združevanje dveh tabel na podlagi stolpca [FirstName]
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
