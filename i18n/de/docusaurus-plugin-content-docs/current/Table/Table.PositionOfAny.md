---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Gibt die Position(en) von angegebenen Zeilen innerhalb der Tabelle zurück.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

Gibt die Zeilenposition(en) des ersten Vorkommens der <code>rows</code>-Liste aus dem Element vom Typ "<code>table</code>" zurück. Wird kein Vorkommen gefunden, wird "-1" zurückgegeben.    <ul>    <li><code>table</code>: Die Eingabetabelle.</li>       <li><code>rows</code>: Die Liste mit den Zeilen in der Tabelle, deren Positionen ermittelt werden sollen.</li>       <li><code>occurrence</code>: <i>[Optional]</i> Gibt an, welche Vorkommen der Zeile zurückgegeben werden sollen.</li>       <li><code>equationCriteria</code>: <i>[Optional]</i> Steuert den Vergleich der Tabellenzeilen.</li>    </ul>      


## Examples

### Example #1 
Ermittelt die Position des ersten Vorkommens von &#34;[a = 2, b = 4]&#34; oder &#34;[a = 6, b = 8]&#34; in der Tabelle &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Ermittelt die Position aller Vorkommen von &#34;[a = 2, b = 4]&#34; oder &#34;[a = 6, b = 8]&#34; in der Tabelle &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
