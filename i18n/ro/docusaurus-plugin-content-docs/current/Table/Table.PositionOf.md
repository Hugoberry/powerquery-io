---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Returnează poziţia sau poziţiile rândului în cadrul tabelului.


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

Returnează poziția de rând a primei ocurențe a <code>row</code> în <code>table</code> specificat. Returnează -1 dacă nu se găsește nicio ocurență.    <ul>       <li><code>table</code>: tabelul de intrare.</li>       <li><code>row</code>: rândul din tabelul pentru care trebuie găsită poziția.</li>       <li><code>occurrence</code>: <i>[opțional]</i> specifică ce ocurențe ale rândului să se returneze.</li>       <li><code>equationCriteria</code>: <i>[opțional]</i> controlează comparația între rândurile tabelului.</li>    </ul>    


## Examples

### Example #1 
Găsiţi poziţia primei ocurenţe de [a = 2, b = 4] în tabelul &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Găsiţi poziţia celei de-a doua ocurenţe de [a = 2, b = 4] în tabelul &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Găsiţi poziţia tuturor ocurenţelor de [a = 2, b = 4] din tabelul &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
