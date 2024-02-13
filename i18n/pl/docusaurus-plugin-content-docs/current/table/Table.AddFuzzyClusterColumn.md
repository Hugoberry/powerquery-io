---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Dodaje nową kolumnę zawierającą reprezentatywne wartości uzyskane z użyciem wartości grupowania rozmytego w określonej kolumnie w tabeli.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Dodaje nową kolumnę <code>newColumnName</code> do tabeli <code>table</code> przy użyciu reprezentatywnych wartości <code>columnName</code>. Wartości reprezentatywne są uzyskiwane przez rozmyte dopasowanie wartości w <code>columnName</code> dla każdego wiersza.    Aby określić sposób porównywania kolumn kluczy, można dołączać opcjonalny zestaw <code>options</code>. Opcje obejmują:     <ul><li><code>Culture</code> : Umożliwia grupowanie rekord&#243;w na podstawie reguł dotyczących kultury. Może to być dowolna prawidłowa nazwa kultury. Na przykład opcja Kultura „ja-JP” grupuje rekordy oparte na kulturze japońskiej. Wartość domyślna to „”, kt&#243;ra grupuje na podstawie niezmiennej kultury angielskiej.</li><li><code>IgnoreCase</code> : Wartość logiczna (true/false), kt&#243;ra umożliwia grupowanie kluczy bez uwzględniania wielkości liter. Na przykład gdy wartość jest r&#243;wna true, „winogrona” są zgrupowane z „winogronami”. Wartość domyślna to true.</li><li><code>IgnoreSpace</code> : Wartość logiczna (true/false), kt&#243;ra umożliwia łączenie części tekstowych w celu znalezienia grup. Na przykład gdy wartość jest r&#243;wna true, „wino grona” są grupowane z „winogronami”. Wartość domyślna to true.</li><li><code>SimilarityColumnName</code> : Nazwa kolumny pokazującej podobieństwo między wartością wejściową i wartością reprezentatywną dla tych danych wejściowych. Wartość domyślna jest r&#243;wna null, a w takim przypadku nowa kolumna podobieństw nie zostanie dodana.</li><li><code>Threshold</code> : Liczba z zakresu od 0,00 do 1,00, kt&#243;ra określa wskaźnik podobieństwa, przy kt&#243;rym zostaną zgrupowane dwie wartości.    Na przykład „Winogrona” i „Winogroa” (brak litery „n”) są zgrupowane ze sobą tylko wtedy, gdy ta opcja jest ustawiona na wartość mniejszą niż 0,90.   Pr&#243;g wynoszący 1,00 zezwala tylko na dokładne dopasowania.    (Pamiętaj, że rozmyte „dokładne dopasowanie” może ignorować r&#243;żnice, takie jak wielkość liter, kolejność wyraz&#243;w i interpunkcję).    Wartość domyślna to 0,80.</li><li><code>TransformationTable</code> : Tabela umożliwiająca grupowanie rekord&#243;w na podstawie mapowań wartości niestandardowych. Powinna zawierać kolumny „Od” i „Do”. Na przykład „Winogrona” są zgrupowane z „Rodzynkami”, jeśli tabela transformacji ma kolumnę „Od” zawierającą „Winogrona” oraz kolumnę „Do” zawierającą „Rodzynki”. Zauważ, że transformacja zostanie zastosowana do wszystkich wystąpień tekstu w tabeli transformacji. Za pomocą powyższej tabeli transformacji „winogrona są słodkie” r&#243;wnież zostaną zgrupowane z „rodzynki są słodkie”.</li></ul><br />    


## Examples

### Example #1 
Znajdź reprezentatywne wartości dla lokalizacji pracowników.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
