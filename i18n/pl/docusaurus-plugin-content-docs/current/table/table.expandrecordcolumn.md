---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Rozwija kolumnę rekordów na kolumny zawierające wartości każdego z nich.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Używając kolumny rekordów `column` w tabeli wejściowej `table`, tworzy tabelę zawierającą kolumnę dla każdego pola w rekordzie. Opcjonalnie można określić parametr `newColumnNames` w celu zagwarantowania unikatowości nazw kolumn w nowej tabeli.

-   `table`: Oryginalna tabela z kolumną rekordów do rozwinięcia.
-   `column`: Kolumna do rozwinięcia.
-   `fieldNames`: Lista pól do rozwinięcia jako kolumny w tabeli.
-   `newColumnNames`: Lista nazw, które zostaną nadane nowym kolumnom. Nazwy nowych kolumn nie mogą stanowić duplikatów nazw kolumn w nowej tabeli.


## Examples

### Example #1
Rozwiń kolumnę \[a\] w tabeli `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` na 3 kolumny: „aa”, „bb” i „cc”.
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
