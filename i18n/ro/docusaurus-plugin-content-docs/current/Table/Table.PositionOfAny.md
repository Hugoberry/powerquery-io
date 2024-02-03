---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Returnează poziţia sau poziţiile oricăruia dintre rândurile specificate în cadrul tabelului.


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

Returnează poziția sau pozițiile de rând din <code>table</code> ale primei ocurențe alei listei de <code>rows</code>. Returnează -1 dacă nu se găsește nicio ocurență.    <ul>    <li><code>table</code>: tabelul de intrare.</li>       <li><code>rows</code>: lista de rânduri din tabelul pentru care trebuie găsite pozițiile.</li>       <li><code>occurrence</code>: <i>[opțional]</i> specifică ce ocurențe ale rândului să se returneze.</li>       <li><code>equationCriteria</code>: <i>[opțional]</i> controlează comparația între rândurile tabelului.</li>    </ul>    


## Examples

### Example #1 
Găsiţi poziţia primei ocurenţe de [a = 2, b = 4] sau [a = 6, b = 8] în tabelul &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Găsiţi poziţia tuturor ocurenţelor de [a = 2, b = 4] sau [a = 6, b = 8] din tabelul &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
