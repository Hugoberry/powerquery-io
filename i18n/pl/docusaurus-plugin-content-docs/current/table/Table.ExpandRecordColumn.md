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

Używając kolumny rekordów <code>column</code> w tabeli wejściowej <code>table</code>, tworzy tabelę zawierającą kolumnę dla każdego pola w rekordzie. Opcjonalnie można określić parametr <code>newColumnNames</code> w celu zagwarantowania unikatowości nazw kolumn w nowej tabeli.    <ul>        <li><code>table</code>: Oryginalna tabela z kolumną rekordów do rozwinięcia. </li>        <li><code>column</code>: Kolumna do rozwinięcia.</li>        <li><code>fieldNames</code>: Lista pól do rozwinięcia jako kolumny w tabeli.</li>        <li><code>newColumnNames</code>: Lista nazw, które zostaną nadane nowym kolumnom. Nazwy nowych kolumn nie mogą stanowić duplikatów nazw kolumn w nowej tabeli.</li>    </ul>


## Examples

### Example #1 
Rozwiń kolumnę [a] w tabeli &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; na 3 kolumny: „aa”, „bb” i „cc”.
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
