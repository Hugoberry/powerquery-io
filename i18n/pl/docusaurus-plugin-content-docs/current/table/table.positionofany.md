---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Zwraca pozycję/pozycje dowolnego z określonych wierszy w tabeli.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Zwraca pozycję/pozycje wiersza/wierszy z tabeli <code>table</code> dla pierwszego wystąpienia listy <code>rows</code>. Jeśli nie zostanie znalezione wystąpienie tej wartości, zwraca -1.    <ul>    <li><code>table</code>: Tabela wejściowa.</li>       <li><code>rows</code>: Lista wierszy w tabeli, których pozycje mają zostać znalezione.</li>       <li><code>occurrence</code>: <i>[Parametr opcjonalny]</i> Określa, które wystąpienie wiersza ma zostać zwrócone.</li>       <li><code>equationCriteria</code>: <i>[Parametr opcjonalny]</i> Steruje porównywaniem wierszy tabeli.</li>    </ul>    


## Examples

### Example #1 
Znajdź pozycję pierwszego wystąpienia wiersza [a = 2, b = 4] lub [a = 6, b = 8] w tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2 
Znajdź pozycje wszystkich wystąpień wiersza [a = 2, b = 4] lub [a = 6, b = 8] w tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
