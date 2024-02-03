---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Retourneert de positie of posities van de rij in de tabel.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Details

Hiermee wordt de rijpositie geretourneerd van de eerste herhaling van de <code>row</code> in de opgegeven <code>table</code>. Retourneert -1 als er geen herhaling wordt gevonden. <ul> <li><code>table</code>: de invoertabel.</li> <li><code>row</code>: de rij in de tabel waarvoor de positie moet worden gevonden.</li> <li><code>occurrence</code>: <i>[Optioneel]</i> Geeft aan welke herhalingen van de rij moeten worden geretourneerd.</li> <li><code>equationCriteria</code>: <i>[Optioneel]</i> Hiermee stuurt u de vergelijking tussen de tabelrijen aan.</li> </ul>    


## Examples

### Example #1 
De positie zoeken van de eerste instantie van [a = 2, b = 4] in de tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
De positie zoeken van de tweede instantie van [a = 2, b = 4] in de tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
De positie zoeken van alle instanties van [a = 2, b = 4] in de tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
