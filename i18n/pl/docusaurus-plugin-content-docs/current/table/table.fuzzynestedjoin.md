---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


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


## Remarks

Tworzy sprzężenie wierszy tabeli `table1` z wierszami tabeli `table2` na podstawie dopasowania rozmytego wartości kolumn klucza wybranych przez parametr `key1` (dla tabeli `table1`) i parametr `key2` (dla tabeli `table2`). Wyniki są zwracane w nowej kolumnie o nazwie `newColumnName`.

Dopasowanie rozmyte to porównanie bazujące na podobieństwie tekstu, a nie jego równości.

Opcjonalny parametr `joinKind` określa rodzaj tworzonego sprzężenia. Jeśli nie określono parametru `joinKind`, domyślnie jest tworzone lewe sprzężenie zewnętrzne. Dostępne opcje:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Możesz dołączyć opcjonalny zestaw `joinOptions`, aby określić metodę porównania kolumn klucza. Dostępne opcje:

-   `ConcurrentRequests` : Liczba z zakresu od 1 do 8 określająca liczbę wątków równoległych, które mają być używane na potrzeby dopasowywania rozmytego. Wartość domyślna to 1.
-   `Culture` : Umożliwia dopasowanie rekordów na podstawie reguł dotyczących kultury. Może to być dowolna prawidłowa nazwa kultury. Na przykład opcja Kultura „ja-JP” dopasowuje rekordy oparte na kulturze japońskiej. Wartość domyślna to „”, która dopasowuje na podstawie niezmiennej kultury angielskiej.
-   `IgnoreCase` : Wartość logiczna (true/false), która umożliwia dopasowywanie kluczy bez uwzględniania wielkości liter. Na przykład gdy wartość jest równa true, „winogrona” są dopasowane do „winogron”. Wartość domyślna to true.
-   `IgnoreSpace` : Wartość logiczna (true/false), która umożliwia łączenie części tekstowych w celu znalezienia dopasowań. Na przykład gdy wartość jest równa true, „wino grona” są dopasowane do „winogron”. Wartość domyślna to true.
-   `NumberOfMatches` : Liczba całkowita określająca maksymalną liczbę zgodnych wierszy, które mogą zostać zwrócone dla każdego wiersza wejściowego. Na przykład wartość 1 spowoduje zwrócenie maksymalnie jednego zgodnego wiersza dla każdego wiersza wejściowego. Jeśli ta opcja nie zostanie określona, zostaną zwrócone wszystkie zgodne wiersze.
-   `SimilarityColumnName` : Nazwa kolumny pokazującej podobieństwo między wartością wejściową i wartością reprezentatywną dla tych danych wejściowych. Wartość domyślna jest równa null, a w takim przypadku nowa kolumna podobieństw nie zostanie dodana.
-   `Threshold` : Liczba z zakresu od 0,00 do 1,00, która określa wskaźnik podobieństwa, przy którym zostaną dopasowane dwie wartości. Na przykład „Winogrona” i „Winogroa” (brak litery „n”) są dopasowywane tylko wtedy, gdy ta opcja jest ustawiona na wartość mniejszą niż 0,90. Próg wynoszący 1,00 zezwala tylko na dokładne dopasowania. (Pamiętaj, że rozmyte „dokładne dopasowanie” może ignorować różnice, takie jak wielkość liter, kolejność wyrazów i interpunkcję). Wartość domyślna to 0,80.
-   `TransformationTable` : Tabela umożliwiająca dopasowywanie rekordów na podstawie mapowań wartości niestandardowych. Powinna zawierać kolumny „Od” i „Do”. Na przykład „winogrona” są dopasowane do „rodzynków, jeśli tabela transformacji ma kolumnę „Od” zawierającą „Winogrona” oraz kolumnę „Do” zawierającą „Rodzynki”. Zauważ, że transformacja zostanie zastosowana do wszystkich wystąpień tekstu w tabeli transformacji. Z powyższą tabelą transformacji „winogrona słodkie zostaną również dopasowane do „rodzynki są słodkie”.


## Examples

### Example #1
Lewe wewnętrzne sprzężenie rozmyte dwóch tabel na podstawie wartości \[FirstName\]
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
