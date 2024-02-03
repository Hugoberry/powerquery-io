---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Vrne položaj ali položaje vrstice v tabeli.


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

Vrne položaj vrstice za prvo pojavitev vrstice <code>row</code> v navedeni tabeli <code>table</code>. Vrne –1, če ni najdena nobena pojavitev.    <ul>       <li><code>table</code>: vhodna tabela.</li>       <li><code>row</code>: vrstica v tabeli, za katero bo poiskan položaj.</li>       <li><code>occurrence</code>: <i>[izbirno]</i> določa, katere pojavitve vrstice bodo vrnjene.</li>       <li><code>equationCriteria</code>: <i>[izbirno]</i> nadzoruje primerjavo med vrsticami tabele.</li>    </ul>    


## Examples

### Example #1 
Poiščite položaj prve pojavitve vrstice [a = 2, b = 4] v tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Poiščite položaj druge pojavitve vrstice [a = 2, b = 4] v tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Poiščite položaj vseh pojavitev vrstice [a = 2, b = 4] v tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
