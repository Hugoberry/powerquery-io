---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


## Description

Rindas no abām aptuveni atbilstošajām tabulām tiek savienotas, pamatojoties uz norādītajām atslēgām.


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

Rindas no <code>table1</code> savieno ar rindām no <code>table2</code>, pamatojoties uz vērtību aptuveno atbilstību atslēgas kolonnās, kuras ir atlasītas pēc <code>key1</code> (attiecībā uz <code>table1</code>) un <code>key2</code> (attiecībā uz <code>table2</code>).<br />Aptuvenā atbilstība ir salīdzinājums, kas balstīts uz teksta līdzību, ne vienādību.<br />Pēc noklusējuma tiek veikta iekšējā savienošana, taču var iekļaut papildu <code>joinKind</code>, lai norādītu savienojuma veidu. Opcijas ietver:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Papildu <code>joinOptions</code> komplekts var tikt iekļauts, lai norādītu, kā salīdzināt atslēgas kolonnas. Opcijas iekļauj:    <ul><li><code>ConcurrentRequests</code> : Skaitlis diapazonā no 1 līdz 8, kas norāda to paralēlo pavedienu skaitu, ko izmantot aptuvenajai atbilstībai. Noklusējuma vērtība ir 1.</li><li><code>Culture</code> : Atļauj ierakstu saskaņošanu atbilstoši kultūrspecifiskām kārtulām. Tas var būt jebkurš derīgs kultūras nosaukums. Piemēram, kultūras opcija &quot;ja-JP&quot; saskaņo ierakstus atbilstoši japāņu valodas kultūrai. Noklusējuma vērtība ir &quot;&quot;, kas saskaņo atbilstoši angļu valodas invarianta kultūrai.</li><li><code>IgnoreCase</code> : Loģiskā vērtība (true/false), kas atļauj reģistrnejutīgu atslēgu saskaņošanu. Piemēram, ja true, &quot;Vīnogas&quot; tiek saskaņotas ar &quot;vīnogas&quot;. Noklusējuma vērtība ir true.</li><li><code>IgnoreSpace</code> : Loģiskā vērtība (true/false), kas ļauj kombinēt teksta daļas, lai atrastu atbilstības. Piemēram, ja true, &quot;Vīn ogas&quot; tiek saskaņots ar &quot;Vīnogas&quot;. Noklusējuma vērtība ir true.</li><li><code>NumberOfMatches</code> : Vesels skaitlis, kas norāda maksimālo atbilstošo rindu skaitu, ko var atgriezt katrai ievades rindai. Piemēram, vērtība 1 atgriezīs tikai vienu atbilstošu rindu katrai ievades rindai. Ja šī opcija netiek norādīta, tiek atgrieztas visas atbilstošās rindas.</li><li><code>SimilarityColumnName</code> : Kolonnas nosaukums, kas norāda ievades vērtības līdzību ar šīs ievades reprezentatīvo vērtību. Noklusējuma vērtība ir Null, un tādā gadījumā jauna kolonna līdzībām netiek pievienota.</li><li><code>Threshold</code> : Skaitlis diapazonā no 0,00 līdz 1,00, kas norāda līdzības vērtējumu, pie kura tiks atrastas divas vērtības.   Piemēram, &quot;Vīnogas&quot; un &quot;Vīnoas&quot; (trūkst &quot;g&quot;),) tiek saskaņotas tikai tad, ja šī opcija ir iestatīta uz mazāku par 0,90.    Slieksnis 1,00 atļauj tikai precīzas atbilstības.    (Ņemiet vērā, ka aptuvenā &quot;precīzā atbilstība&quot; var ignorēt atšķirības, piemēram, lielos burtus, vārdu secību un pieturzīmes.) Noklusējuma vērtība ir 0,80.</li><li><code>TransformationTable</code> : Tabula, kas ļauj saskaņot ierakstus atbilstoši pielāgotu vērtību kartējumiem. Tajā ir jābūt kolonnām &quot;No&quot; un &quot;Uz&quot;. Piemēram, vērtība &quot;Vīnogas&quot; tiek saskaņota ar &quot;Rozīnes&quot;, ja transformācijas tabulā kolonna &quot;No&quot;, kurā ir vērtība &quot;Vīnogas&quot;, kolonna &quot;Uz&quot;, kas kurā ir vērtība &quot;Rozīnes&quot;. Ņemiet vērā, ka transformācija tiks lietota visiem transformācijas tabulas teksta gadījumiem. Izmantojot iepriekšminēto transformācijas tabulu, teksts &quot;Vīnogas ir saldas&quot; tiks saskaņots arī ar tekstu &quot;Rozīnes ir saldas&quot;.</li></ul><br />    


## Examples

### Example #1 
Kreisās puses iekšējo aptuvenais divu tabulu apvienojums, pamatojoties uz [FirstName]
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
