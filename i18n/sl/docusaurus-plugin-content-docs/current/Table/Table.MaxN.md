---
title: Table.MaxN
---

# Table.MaxN


## Description

Vrne največje vrstice glede na dane kriterije.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Vrne največje vrstice v tabeli <code>table</code>, če navedete <code>comparisonCriteria</code>.    Ko so vrstice razvrščene, morate določiti parameter <code>countOrCondition</code> za nadaljnje filtriranje rezultata. Upoštevajte, da algoritem razvrščanja ne zagotavlja nespremenljivega razvrščenega rezultata. Parameter <code>countOrCondition</code> ima lahko več oblik:    <ul>        <li> Če navedete število, je vrnjen seznam z največ <code>countOrCondition</code> elementi v naraščajočem vrstnem redu. </li>        <li> Če navedete pogoj, je vrnjen seznam elementov, ki prvotno izpolnjujejo pogoj. Ko določen element ne izpolnjuje več pogoja, se nadaljnji elementi ne upoštevajo. </li>  </ul>


## Examples

### Example #1 
Poiščite vrstico z največjo vrednostjo v stolpcu [a] s pogojem [a] &gt; 0 v tabeli. Vrstice so razvrščene, preden uporabite filter.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2 
Poiščite vrstico z največjo vrednostjo v stolpcu [a] s pogojem [b] &gt; 0 v tabeli. Vrstice so razvrščene, preden uporabite filter.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
