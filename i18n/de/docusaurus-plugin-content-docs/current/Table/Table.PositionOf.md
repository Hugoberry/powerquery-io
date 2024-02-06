---
title: Table.PositionOf
---

# Table.PositionOf


Gibt die Position(en) der Zeile innerhalb der Tabelle zurück.


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

Gibt die Zeilenposition des ersten Vorkommens von "<code>row</code>" im angegebenen Element vom Typ "<code>table</code>" zurück. Wird kein Vorkommen gefunden, wird "-1" zurückgegeben.    <ul>       <li><code>table</code>: Die Eingabetabelle.</li>       <li><code>row</code>: Die Zeile in der Tabelle, deren Position ermittelt werden soll.</li>       <li><code>occurrence</code>: <i>[Optional]</i> Gibt an, welche Vorkommen der Zeile zurückgegeben werden sollen.</li>       <li><code>equationCriteria</code>: <i>[Optional]</i> Steuert den Vergleich der Tabellenzeilen.</li>    </ul>    


## Examples

### Example #1 
Ermittelt die Position des ersten Vorkommens von &#34;[a = 2, b = 4]&#34; in der Tabelle &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Ermittelt die Position des zweiten Vorkommens von &#34;[a = 2, b = 4]&#34; in der Tabelle &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Ermittelt die Position aller Vorkommen von &#34;[a = 2, b = 4]&#34; in der Tabelle &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
