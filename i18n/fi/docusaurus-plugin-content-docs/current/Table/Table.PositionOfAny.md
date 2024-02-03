---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Palauttaa minkä tahansa määritetyn rivin sijainnin tai sijainnit taulukon sisällä.


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

Palauttaa luettelon <code>rows</code> ensimmäisen esiintymän rivien sijainnit kohteesta <code>table</code>. Palauttaa arvon -1, jos yhtään esiintymää ei löydy.    <ul>       <li><code>table</code>: syötetaulukko.</li>       <li><code>rows</code>: luettelo taulukon riveistä, joiden sijainnit etsitään.</li>       <li><code>occurrence</code>: <i>(valinnainen)</i> määrittää, mitkä rivin esiintymät palautetaan.</li>       <li><code>equationCriteria</code>: <i>(valinnainen)</i> ohjaa taulukon rivien välistä vertailua.</li>    </ul>    


## Examples

### Example #1 
Etsi kohteen [a = 2, b = 4] tai [a = 6, b = 8] ensimmäisen esiintymän sijainti taulukossa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Etsi kohteen [a = 2, b = 4] tai [a = 6, b = 8] kaikkien esiintymien sijainnit taulukossa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
