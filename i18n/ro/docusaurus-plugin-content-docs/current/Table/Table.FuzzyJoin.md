---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


## Description

Unește rândurile din cele două tabele care se potrivesc aproximativ în funcție de cheile date.


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

Unește rândurile din <code>table1</code> cu rândurile din <code>table2</code>, pe baza potrivirii vagi a valorilor din coloanele cheie selectate după <code>key1</code> (pentru <code>table1</code>) și <code>key2</code> (pentru <code>table2</code>).<br />Potrivirea vagă este o comparație ce se bazează pe similaritatea textului, nu pe egalitate.<br />În mod implicit, se efectuează o unire internă; totuși, poate fi inclus parametrul opțional <code>joinKind</code> pentru a specifica tipul de unire. Opțiunile sunt:    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br />Se poate include un set opțional de <code>joinOptions</code> pentru a specifica modul de comparare a coloanelor cheie. Opțiunile sunt:    <ul><li><code>ConcurrentRequests</code> : Un număr &#238;ntre 1 și 8 care specifică numărul de fire paralele de utilizat pentru potrivirea vagă. Valoarea implicită este 1.</li><li><code>Culture</code> : Permite potrivirea &#238;nregistrărilor pe baza unor reguli specifice culturii. Poate fi orice nume de cultură valid. De exemplu, o opțiune Cultură „ja-JP” potrivește &#238;nregistrările pe baza culturii japoneze. Valoarea implicită este „”, care realizează grupările pe baza culturii invariabile engleze.</li><li><code>IgnoreCase</code> : O valoare logică (True/False) care permite potrivirea cheilor care nu sunt sensibile la litere mari și mici. De exemplu, c&#226;nd este True, „Struguri” se potrivește cu „struguri”. Valoarea implicită este True.</li><li><code>IgnoreSpace</code> : O valoare logică (True/False) care permite combinarea părților de text pentru a găsi potriviri. De exemplu, c&#226;nd este True, „Stru guri” este potrivit cu „Struguri”. Valoarea implicită este True.</li><li><code>NumberOfMatches</code> : Un număr &#238;ntreg care specifică numărul maxim de r&#226;nduri care se potrivesc ce pot fi returnate pentru fiecare r&#226;nd de intrare. De exemplu, o valoare 1 va returna cel mult un r&#226;nd care se potrivește pentru fiecare r&#226;nd de intrare. Dacă această opțiune nu este furnizată, se returnează toate r&#226;ndurile care se potrivesc.</li><li><code>SimilarityColumnName</code> : Un nume pentru coloana care arată similaritatea dintre o valoare de intrare și valoarea reprezentativă pentru acea intrare. Valoarea implicită este nulă, caz &#238;n care nu se va adăuga o nouă coloană pentru similitudini.</li><li><code>Threshold</code> : Un număr &#238;ntre 0,00 și 1,00 care specifică scorul de similaritate la care se vor potrivi două valori.    De exemplu, „Struguri” și „Sruguri” (lipsește „t”) se potrivesc numai dacă această opțiune este setată la mai puțin de 0,90.    Un prag de 1,00 permite numai potriviri exacte.    (Rețineți că o „potrivire exactă” vagă poate ignora diferențe precum literele mari și mici, ordinea cuvintelor și semnele de punctuație.)    Valoarea implicită este 0,80.</li><li><code>TransformationTable</code> : Un tabel care permite potrivirea &#238;nregistrărilor pe baza mapărilor de valori particularizate. Ar trebui să conțină coloane „De la” și „La”. De exemplu, „Struguri” este potrivit cu „Stafide” dacă se furnizează un tabel de transformare cu coloana „De la” care conține „Struguri” și coloana „La” care conține „Stafide”. Rețineți că transformarea se va aplica &#238;n toate aparițiile textului din tabelul de transformare. Cu tabelul de transformare de mai sus, șirul „Strugurii sunt dulci” va fi potrivit cu „Stafidele sunt dulci”.</li></ul><br />    


## Examples

### Example #1 
Uniune aproximativă internă la stânga a două tabele, în funcție de [FirstName]
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
