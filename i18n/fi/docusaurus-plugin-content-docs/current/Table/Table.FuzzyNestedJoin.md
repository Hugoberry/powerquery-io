---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Suorittaa sumean liitoksen taulukoiden välillä annetuille sarakkeille ja tuo liitostuloksen uuteen sarakkeeseen.


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

Liittää taulukon <code>table1</code> rivit ja taulukon <code>table2</code> rivit yhteen sarakkeiden <code>key1</code> (taulukolle <code>table1</code>) ja <code>key2</code> (taulukolle <code>table2</code>) valitsemien avainsarakkeiden arvojen sumean vertailun perusteella. Tulokset lisätään uuteen sarakkeeseen nimeltä <code>newColumnName</code>.<br />Sumea vastaavuus on vertailu, joka perustuu tekstin samankaltaisuuteen tekstin yhtäläisyyden sijaan.<br />Valinnainen liitos <code>joinKind</code> määrittää suoritettavan liitoksen tyypin. Oletusarvon mukaan vasen ulkoliitos suoritetaan, jos kohdetta <code>joinKind</code> ei määritetä. Vaihtoehtoja ovat seuraavat:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Valinnainen kohteen <code>joinOptions</code> joukko voidaan sisällyttää määrittämään, miten avainsarakkeita verrataan. Vaihtoehtoja ovat seuraavat:    <ul><li><code>ConcurrentRequests</code> : Luku 1–8, joka m&#228;&#228;ritt&#228;&#228; sumean vastaavuuden yhteydess&#228; k&#228;ytett&#228;vien rinnakkaisten s&#228;ikeiden m&#228;&#228;r&#228;n. Oletusarvo on 1.</li><li><code>Culture</code> : Sallii tietueiden vastaavuuden kulttuurikohtaisten s&#228;&#228;nt&#246;jen perusteella. Se voi olla mik&#228; tahansa kelvollinen maa-asetuksen nimi. Esimerkiksi maa-asetus ja-JP vastaa tietueet japanilaisen kulttuurin perusteella. Oletusarvo on &quot;&quot;, joka vastaa invariantin englantilaisen kulttuurin perusteella.</li><li><code>IgnoreCase</code> : Looginen arvo (tosi/ep&#228;tosi), joka sallii kirjainkoosta riippumattoman avainvastaavuuden. Esimerkiksi kun arvo on tosi, Viiniryp&#228;leet ja viiniryp&#228;leet vastaavat toisiaan. Oletusarvo on tosi.</li><li><code>IgnoreSpace</code> : Looginen arvo (tosi/ep&#228;tosi), joka sallii tekstiosien yhdist&#228;misen vastaavuuksia etsitt&#228;ess&#228;. Esimerkiksi kun arvo on tosi, Viini ryp&#228;leet ja Viiniryp&#228;leet vastaavat toisiaan. Oletusarvo on tosi.</li><li><code>NumberOfMatches</code> : Kokonaisluku, joka m&#228;&#228;ritt&#228;&#228; niiden vastaavien rivien enimm&#228;ism&#228;&#228;r&#228;n, jotka voidaan palauttaa kullekin sy&#246;teriville. Esimerkiksi arvo 1 palauttaa enint&#228;&#228;n yhden vastaavan rivin kullekin sy&#246;teriville. Jos t&#228;t&#228; asetusta ei anneta, kaikki vastaavat rivit palautetaan.</li><li><code>SimilarityColumnName</code> : Sen sarakkeen nimi, joka n&#228;ytt&#228;&#228; sy&#246;tearvon ja kyseist&#228; sy&#246;tett&#228; edustavan arvon samankaltaisuuden. Oletusarvo on tyhj&#228;arvo, joten uutta saraketta samankaltaisuuksia varten ei lis&#228;t&#228;.</li><li><code>Threshold</code> : Luku v&#228;lilt&#228; 0,00–1,00, joka m&#228;&#228;ritt&#228;&#228; samankaltaisuuspistem&#228;&#228;r&#228;n, jolla kaksi arvoa yhdistet&#228;&#228;n. Esimerkiksi “Viiniryp&#228;leet” ja “Viniryp&#228;leet” (i-kirjain puuttuu) t&#228;sm&#228;&#228;v&#228;t vain, jos t&#228;m&#228;n asetuksen arvo on pienempi kuin 0,90. Raja-arvo 1,00 sallii vain tarkat vastaavuudet. (Huomaa, ett&#228; sumea “tarkka vastine” saattaa ohittaa erot, kuten kirjainkoon, sanaj&#228;rjestyksen ja v&#228;limerkit.)  Oletusarvo on 0,80.</li><li><code>TransformationTable</code> : Taulukko, joka sallii tietueiden vastaamisen mukautettujen arvojen yhdist&#228;mism&#228;&#228;ritysten perusteella. Sen tulee sis&#228;lt&#228;&#228; sarakkeet from ja to. Esimerkiksi viiniryp&#228;leet muodostaa vastaavuuden rusinoiden kanssa, jos muuntamistaulukossa on annettu &quot;from&quot;-sarake, joka sis&#228;lt&#228;&#228; viiniryp&#228;leet ja &quot;to&quot;-sarake, joka sis&#228;lt&#228;&#228; &quot;rusinat&quot;. Huomaa, ett&#228; muunnosta k&#228;ytet&#228;&#228;n kaikkiin muunnostaulukon tekstin esiintymiin. Edell&#228; mainitulla muunnostaulukolla &quot;ryp&#228;leet ovat makeita&quot; vastaa my&#246;s lausetta &quot;rusinat ovat makeita&quot;.</li></ul><br />


## Examples

### Example #1 
Kahden taulukon vasen sumea sisäliitos perustuen kohteeseen [FirstName]
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
