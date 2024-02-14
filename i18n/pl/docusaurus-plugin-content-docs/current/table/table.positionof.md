---
title: Table.PositionOf
---

# Table.PositionOf


Zwraca pozycję/pozycje wiersza w tabeli.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Zwraca pozycję wiersza dla pierwszego wystąpienia wiersza <code>row</code> w określonej tabeli <code>table</code>. Jeśli nie zostanie znalezione wystąpienie, zwraca -1.    <ul>       <li><code>table</code>: Tabela wejściowa.</li>       <li><code>row</code>: Wiersz w tabeli, którego pozycja ma zostać znaleziona.</li>       <li><code>occurrence</code>: <i>[Parametr opcjonalny]</i> Określa, które wystąpienie wiersza ma zostać zwrócone.</li>       <li><code>equationCriteria</code>: <i>[Parametr opcjonalny]</i> Steruje porównywaniem wierszy tabeli.</li>    </ul>    


## Examples

### Example #1 
Znajdź pozycję pierwszego wystąpienia wiersza [a = 2, b = 4] w tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2 
Znajdź pozycję drugiego wystąpienia wiersza [a = 2, b = 4] w tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3 
Znajdź pozycje wszystkich wystąpień wiersza [a = 2, b = 4] w tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
