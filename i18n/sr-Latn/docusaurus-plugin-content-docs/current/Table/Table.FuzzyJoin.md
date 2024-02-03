---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


## Description

Spaja redove iz dveju tabela koji se približno podudaraju na osnovu datih ključeva.


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

Povezuje redove iz <code>table1</code> sa redovima iz <code>table2</code> na osnovu približnog podudaranja vrednosti kolona klјuča koje bira <code>key1</code> (za <code>table1</code>) i <code>key2</code> (za <code>table2</code>).<br />Približno podudaranje je poređenje koje se zasniva na sličnosti teksta, a ne istovetnosti teksta.<br />Podrazumevano se vrši unutrašnje spajanje, ali može se uklјučiti opcionalno <code>joinKind</code> da bi se naveo tip spajanja. Opcije obuhvataju:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Može se uklјučiti opcionalni skup <code>joinOptions</code> da bi se navelo kako treba porediti kolone klјuča. Opcije obuhvataju:    <ul><li><code>ConcurrentRequests</code> : Broj između 1 i 8 koji navodi broj paralelnih niti koje se koriste za približno podudaranje. Podrazumevana vrednost je 1.</li><li><code>Culture</code> : Omogućava podudaranje zapisa na osnovu pravila specifičnih za kulturu. To može da bude bilo koje važeće ime kulture. Na primer, opcija kulture „ja-JP“ podudara zapise na osnovu japanske kulture. Podrazumevana vrednost je „“, koja podudara na osnovu nepromenlјive engleske kulture.</li><li><code>IgnoreCase</code> : Logička (true/false) vrednost koja omogućava podudaranje klјuča koje ne razlikuje mala i velika slova. Na primer, kada se podesi vrednost „true“, „Grožđe“ se podudara sa „grožđe“. Podrazumevana vrednost je „true“.</li><li><code>IgnoreSpace</code> : Logička (true/false) vrednost koja omogućava kombinovanje delova teksta kako bi se pronašla podudaranja. Na primer, kada se podesi vrednost „true“, „Gro žđe“ se podudara sa „Grožđe“. Podrazumevana vrednost je „true“.</li><li><code>NumberOfMatches</code> : Ceo broj koji navodi maksimalan broj redova koji se podudaraju koji se može vratiti za svaki red ulaza. Na primer, vrednost 1 vraća najviše jedan red koji se podudara za svaki red ulaza. Ako ova opcija nije navedena, vraćaju se svi redovi koji se podudaraju.</li><li><code>SimilarityColumnName</code> : Ime za kolonu koja prikazuje sličnost između ulazne vrednosti i reprezentativne vrednosti za taj unos. Podrazumevana opcija je bez vrednosti i u tom slučaju neće biti dodata nova kolona za sličnosti.</li><li><code>Threshold</code> : Broj između 0,00 i 1,00 koji navodi ocenu sličnosti po kojoj će se dve vrednosti podudarati.    Na primer, „Grožđe“ i „Grože“ (nedostaje slovo „đ“) podudaraju se samo ako je ova opcija podešena na manje od 0,90.    Granična vrednost od 1,00 dozvoljava samo potpuna podudaranja.    (Imajte u vidu da približno „Potpuno podudaranje“ može da zanemaruje razlike kao što su veličina slova, redosled reči i interpunkcije.)    Podrazumevana vrednost je 0,80.</li><li><code>TransformationTable</code> : Tabela koja omogućava podudaranje zapisa na osnovu mapiranja prilagođene vrednosti. Trebalo bi da sadrži kolone „Iz“ i „U“. Na primer, „Grožđe se podudara sa „Suvo grožđe“ ako je data tabela transformacije sa kolonom „Iz“ koja sadrži „Grožđe“ i kolonom „U“ koja sadrži „Suvo grožđe“. Imajte na umu da se transformacija primenjuje na sva pojavlјivanja teksta u tabeli transformacije. Na osnovu gorenavedene tabele transformacije i „Grožđe je slatko“ podudariće se sa „Suvo grožđe je slatko“.</li></ul><br />    


## Examples

### Example #1 
Levo unutrašnje spajanje približnih za dve tabele zasnovane na [FirstName]
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
