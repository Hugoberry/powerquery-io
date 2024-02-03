---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Wykonuje sprzężenie rozmyte tabel z użyciem określonych kolumn i umieszcza wynik sprzężenia w nowej kolumnie.


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

Tworzy sprzężenie wierszy tabeli <code>table1</code> z wierszami tabeli <code>table2</code> na podstawie dopasowania rozmytego wartości kolumn klucza wybranych przez parametr <code>key1</code> (dla tabeli <code>table1</code>) i parametr <code>key2</code> (dla tabeli <code>table2</code>). Wyniki są zwracane w nowej kolumnie o nazwie <code>newColumnName</code>.<br />Dopasowanie rozmyte to porównanie bazujące na podobieństwie tekstu, a nie jego równości.<br />Opcjonalny parametr <code>joinKind</code> określa rodzaj tworzonego sprzężenia. Jeśli nie określono parametru <code>joinKind</code>, domyślnie jest tworzone lewe sprzężenie zewnętrzne. Dostępne opcje:    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br />Możesz dołączyć opcjonalny zestaw <code>joinOptions</code>, aby określić metodę porównania kolumn klucza. Dostępne opcje:    <ul><li><code>ConcurrentRequests</code> : Liczba z zakresu od 1 do 8 określająca liczbę wątk&#243;w r&#243;wnoległych, kt&#243;re mają być używane na potrzeby dopasowywania rozmytego. Wartość domyślna to 1.</li><li><code>Culture</code> : Umożliwia dopasowanie rekord&#243;w na podstawie reguł dotyczących kultury. Może to być dowolna prawidłowa nazwa kultury. Na przykład opcja Kultura „ja-JP” dopasowuje rekordy oparte na kulturze japońskiej. Wartość domyślna to „”, kt&#243;ra dopasowuje na podstawie niezmiennej kultury angielskiej.</li><li><code>IgnoreCase</code> : Wartość logiczna (true/false), kt&#243;ra umożliwia dopasowywanie kluczy bez uwzględniania wielkości liter. Na przykład gdy wartość jest r&#243;wna true, „winogrona” są dopasowane do „winogron”. Wartość domyślna to true.</li><li><code>IgnoreSpace</code> : Wartość logiczna (true/false), kt&#243;ra umożliwia łączenie części tekstowych w celu znalezienia dopasowań. Na przykład gdy wartość jest r&#243;wna true, „wino grona” są dopasowane do „winogron”. Wartość domyślna to true.</li><li><code>NumberOfMatches</code> : Liczba całkowita określająca maksymalną liczbę zgodnych wierszy, kt&#243;re mogą zostać zwr&#243;cone dla każdego wiersza wejściowego. Na przykład wartość 1 spowoduje zwr&#243;cenie maksymalnie jednego zgodnego wiersza dla każdego wiersza wejściowego. Jeśli ta opcja nie zostanie określona, zostaną zwr&#243;cone wszystkie zgodne wiersze.</li><li><code>SimilarityColumnName</code> : Nazwa kolumny pokazującej podobieństwo między wartością wejściową i wartością reprezentatywną dla tych danych wejściowych. Wartość domyślna jest r&#243;wna null, a w takim przypadku nowa kolumna podobieństw nie zostanie dodana.</li><li><code>Threshold</code> : Liczba z zakresu od 0,00 do 1,00, kt&#243;ra określa wskaźnik podobieństwa, przy kt&#243;rym zostaną dopasowane dwie wartości. Na przykład     „Winogrona” i „Winogroa” (brak litery „n”) są dopasowywane tylko wtedy, gdy ta opcja jest ustawiona na wartość mniejszą niż 0,90.    Pr&#243;g wynoszący 1,00 zezwala tylko na dokładne dopasowania.    (Pamiętaj, że rozmyte „dokładne dopasowanie” może ignorować r&#243;żnice, takie jak wielkość liter, kolejność wyraz&#243;w i interpunkcję).    Wartość domyślna to 0,80.</li><li><code>TransformationTable</code> : Tabela umożliwiająca dopasowywanie rekord&#243;w na podstawie mapowań wartości niestandardowych. Powinna zawierać kolumny „Od” i „Do”. Na przykład „winogrona” są dopasowane do „rodzynk&#243;w, jeśli tabela transformacji ma kolumnę „Od” zawierającą „Winogrona” oraz kolumnę „Do” zawierającą „Rodzynki”. Zauważ, że transformacja zostanie zastosowana do wszystkich wystąpień tekstu w tabeli transformacji. Z powyższą tabelą transformacji „winogrona słodkie zostaną r&#243;wnież dopasowane do „rodzynki są słodkie”.</li></ul><br />


## Examples

### Example #1 
Lewe wewnętrzne sprzężenie rozmyte dwóch tabel na podstawie wartości [FirstName]
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
