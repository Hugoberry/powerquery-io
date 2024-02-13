---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Retourneert de positie of posities van elk van de opgegeven rijen in de tabel.


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

Hiermee wordt/worden de positie(s) geretourneerd van de rij(en) van de <code>table</code> van de eerste herhaling van de lijst met <code>rows</code>. Retourneert -1 als er geen herhaling wordt gevonden. <ul> <li><code>table</code>: de invoertabel.</li> <li><code>rows</code>: de lijst met rijen in de tabel waarvoor de posities moeten worden gevonden.</li> <li><code>occurrence</code>: <i>[Optioneel]</i> Geeft aan welke herhalingen van de rij moeten worden geretourneerd.</li> <li><code>equationCriteria</code>: <i>[Optioneel]</i> Hiermee stuurt u de vergelijking tussen de tabelrijen aan.</li> </ul>    


## Examples

### Example #1 
De positie zoeken van de eerste instantie van [a = 2, b = 4] of [a = 6, b = 8] in de tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
De positie zoeken van alle instanties van [a = 2, b = 4] of [a = 6, b = 8] in de tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
