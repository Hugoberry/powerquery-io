---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Atliekamas apytikslis nurodytų lentelių stulpelių sujungimas, o sujungimo rezultatas pateikiamas naujame stulpelyje.


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

Sujungiamos <code>table1</code> eilutės su <code>table2</code> eilutėmis, atsižvelgiant į raktų stulpelių, pasirinktų <code>key1</code> (<code>table1</code>) ir <code>key2</code> (<code>table2</code>), reikšmių apytikslį atitikimą. Rezultatai pateikiami naujame stulpelyje pavadinimu <code>newColumnName</code>.<br />Apytikslis atitikimas – tai palyginimas pagal teksto panašumą, o ne atitikimą.<br />Pasirenkama parinktis <code>joinKind</code> nurodo sujungimo, kurį reikia atlikti, rūšį. Pagal numatytuosius parametrus, jei nenurodyta <code>joinKind</code>, atliekamas kairysis išorinis sujungimas. Galimos parinktys:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Galima įtraukti pasirenkamą <code>joinOptions</code> rinkinį siekiant nurodyti, kaip palyginti raktų stulpelius. Galimos parinktys:    <ul><li><code>ConcurrentRequests</code> : Skaičius nuo 1 iki 8, nurodantis, kiek lygiagrečių gijų reikia naudoti apytikslėms atitiktims sudaryti. Numatytoji reikšmė yra 1.</li><li><code>Culture</code> : Leidžiama derinti įrašus pagal konkrečios kultūros taisykles. Tai gali būti bet kuris tinkamas kultūros pavadinimas. Pavyzdžiui, kultūros parinktimi „ja-JP“ derinami įrašai pagal japonų kultūrą. Numatytoji reikšmė yra „“, kuria derinama pagal pastoviąją anglų kultūrą.</li><li><code>IgnoreCase</code> : Loginė (teisinga / klaidinga) reikšmė, kuria leidžiama derinti raktus neskiriant didžiųjų ir mažųjų raidžių. Pavyzdžiui, kai nustatyta kaip teisinga, reikšmė „Vynuogės“ derinama su reikšme „vynuogės“. Numatytoji reikšmė yra nustatyta kaip teisinga.</li><li><code>IgnoreSpace</code> : Loginė (teisinga / klaidinga) reikšmė, kuria leidžiama sujungti teksto dalis, kad būtų galima rasti atitikmenis. Pavyzdžiui, kai nustatyta kaip teisinga, reikšmė „Vynuo gės“ derinama su reikšme „Vynuogės“. Numatytoji reikšmė yra nustatyta kaip teisinga.</li><li><code>NumberOfMatches</code> : Sveikasis skaičius, nurodantis didžiausią sutampančių eilučių, kurios gali būti pateiktos kiekvienai įvesties eilutei, skaičių. Pavyzdžiui, 1 reikšme bus pateikta ne daugiau kaip viena kiekvienos įvesties eilutės sutampanti eilutė. Jei ši parinktis nėra pateikta, pateikiamos visos sutampančios eilutės.</li><li><code>SimilarityColumnName</code> : Stulpelio, kuriame rodomas panašumas tarp įvesties reikšmės ir nominaliosios tos įvesties reikšmės, pavadinimas. Numatytoji reikšmė yra neapibrėžta. Tokiu atveju naujas stulpelis, skirtas panašumams, nebus įtrauktas.</li><li><code>Threshold</code> : Skaičius nuo 0,00 iki 1,00, nurodantis panašumo įvertį, pagal kurį bus derinamos dvi reikšmės.     Pavyzdžiui, reikšmės „Vynuogės“ ir „Vynuoės“ (be „g“) laikomos atitinkančiomis, kai ši parinktis nustatyta į mažiau nei 0,90.    1,00 ribinė reikšmė leidžia tik tikslius atitikmenis.    (Atminkite, kad apytikslis „tikslus atitikmuo“ gali nepaisyti skirtumų, pvz., didžiųjų raidžių, žodžių tvarkos ir skyrybos ženklų.) Numatytoji reikšmė yra 0,80.</li><li><code>TransformationTable</code> : Lentelė, kurioje leidžiama derinti įrašus pagal pasirinktinių reikšmių susiejimus. Joje turi būti stulpeliai „Nuo“ ir „Iki“. Pavyzdžiui, reikšmė „Vynuogės“ derinama su reikšme „Razinos“, jei pakeitimo lentelė pateikiama su stulpeliu „Nuo“, kuriame nurodyta reikšmė „Vynuogės“, ir stulpeliu „Iki“, kuriame nurodyta reikšmė „Razinos“. Įsidėmėkite, kad keitimas bus pritaikytas visais teksto pasikartojimų pakeitimo lentelėje atvejais. Anksčiau pateiktoje pakeitimo lentelėje reikšmė „Vynuogės yra saldžios“ taip pat bus derinama su reikšme „Razinos yra saldžios“.</li></ul><br />


## Examples

### Example #1 
Kairysis vidinis apytikslis dviejų lentelių sujungimas atsižvelgiant į [FirstName]
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
