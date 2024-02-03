---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Palauttaa rivin sijainnin tai sijainnit taulukon sisällä.


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

Palauttaa kohteen <code>row</code> ensimmäisen esiintymän rivisijainnin määritetyssä kohteessa <code>table</code>. Palauttaa arvon -1, jos yhtään esiintymää ei löydy.    <ul>       <li><code>table</code>: syötetaulukko.</li>       <li><code>row</code>: taulukon rivi, jonka sijainti etsitään.</li>       <li><code>occurrence</code>: <i>(valinnainen)</i> määrittää, mitkä rivin esiintymät palautetaan.</li>       <li><code>equationCriteria</code>: <i>(valinnainen)</i> ohjaa taulukon rivien välistä vertailua.</li>    </ul>    


## Examples

### Example #1 
Etsi kohteen [a = 2, b = 4] ensimmäisen esiintymän sijainti taulukossa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Etsi kohteen [a = 2, b = 4] toisen esiintymän sijainti taulukossa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Etsi kohteen [a = 2, b = 4] kaikkien esiintymien sijainnit taulukossa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
