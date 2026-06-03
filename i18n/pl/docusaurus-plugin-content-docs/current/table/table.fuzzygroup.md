---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Grupuje wiersze w tabeli na podstawie rozmytego dopasowania kluczy.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

Grupuje wiersze `table` za pomocą rozmytego dopasowania wartości w określonej kolumnie, `key`, dla każdego wiersza. Dla każdej grupy tworzony jest rekord zawierający kolumny klucza (i ich wartości) wraz ze wszystkimi zagregowanymi kolumnami określonymi przez wartość `aggregatedColumns`. Ta funkcja nie może gwarantować zwrócenia ustalonej kolejności wierszy. Aby określić sposób porównywania kolumn kluczy, można dołączać

opcjonalny zestaw `options`. Opcje obejmują:

-   `Culture` : Umożliwia grupowanie rekordów na podstawie reguł dotyczących kultury. Może to być dowolna prawidłowa nazwa kultury. Na przykład opcja Kultura „ja-JP” grupuje rekordy oparte na kulturze japońskiej. Wartość domyślna to „”, która grupuje na podstawie niezmiennej kultury angielskiej.
-   `IgnoreCase` : Wartość logiczna (true/false), która umożliwia grupowanie kluczy bez uwzględniania wielkości liter. Na przykład gdy wartość jest równa true, „winogrona” są zgrupowane z „winogronami”. Wartość domyślna to true.
-   `IgnoreSpace` : Wartość logiczna (true/false), która umożliwia łączenie części tekstowych w celu znalezienia grup. Na przykład gdy wartość jest równa true, „wino grona” są grupowane z „winogronami”. Wartość domyślna to true.
-   `SimilarityColumnName` : Nazwa kolumny pokazującej podobieństwo między wartością wejściową i wartością reprezentatywną dla tych danych wejściowych. Wartość domyślna jest równa null, a w takim przypadku nowa kolumna podobieństw nie zostanie dodana.
-   `Threshold` : Liczba z zakresu od 0,00 do 1,00, która określa wskaźnik podobieństwa, przy którym zostaną zgrupowane dwie wartości. Na przykład „Winogrona” i „Winogroa” (brak litery „n”) są zgrupowane ze sobą tylko wtedy, gdy ta opcja jest ustawiona na wartość mniejszą niż 0,90. Próg wynoszący 1,00 zezwala tylko na dokładne dopasowania. (Pamiętaj, że rozmyte „dokładne dopasowanie” może ignorować różnice, takie jak wielkość liter, kolejność wyrazów i interpunkcję). Wartość domyślna to 0,80.
-   `TransformationTable` : Tabela umożliwiająca grupowanie rekordów na podstawie mapowań wartości niestandardowych. Powinna zawierać kolumny „Od” i „Do”. Na przykład „Winogrona” są zgrupowane z „Rodzynkami”, jeśli tabela transformacji ma kolumnę „Od” zawierającą „Winogrona” oraz kolumnę „Do” zawierającą „Rodzynki”. Zauważ, że transformacja zostanie zastosowana do wszystkich wystąpień tekstu w tabeli transformacji. Za pomocą powyższej tabeli transformacji „winogrona są słodkie” również zostaną zgrupowane z „rodzynki są słodkie”.


## Examples

### Example #1
Zgrupuj tabelę, dodając kolumnę zbiorczą \[Count\] zawierającą liczbę pracowników w każdej lokalizacji (`each Table.RowCount(_)`).
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
