---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Vrne položaj ali položaje katere koli navedene vrstice v tabeli.


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

Vrne položaje vrstic iz tabele <code>table</code> za prvo pojavitev seznama vrstic <code>rows</code>. Vrne –1, če ni najdena nobena pojavitev.    <ul>    <li><code>table</code>: vhodna tabela.</li>       <li><code>rows</code>: seznam vrstic v tabeli, za katere bodo poiskani položaji.</li>       <li><code>occurrence</code>: <i>[izbirno]</i> določa, katere pojavitve vrstice bodo vrnjene.</li>       <li><code>equationCriteria</code>: <i>[izbirno]</i> nadzoruje primerjavo med vrsticami tabele.</li>    </ul>    


## Examples

### Example #1 
Poiščite položaj prve pojavitve vrstice [a = 2, b = 4] ali [a = 6, b = 8] v tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Poiščite položaj vseh pojavitev vrstice [a = 2, b = 4] ali [a = 6, b = 8] v tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
