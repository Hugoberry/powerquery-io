---
title: Table.MinN
---

# Table.MinN


## Description

Vrne najmanjše vrstice glede na dane kriterije.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Vrne najmanjše vrstice v tabeli <code>table</code>, če navedete <code>comparisonCriteria</code>. Ko so vrstice razvrščene, morate določiti parameter <code>countOrCondition</code> za nadaljnje filtriranje rezultata. Upoštevajte, da algoritem razvrščanja ne zagotavlja nespremenljivega razvrščenega rezultata. Parameter <code>countOrCondition</code> ima lahko več oblik:    <ul>        <li> Če navedete število, je vrnjen seznam z največ <code>countOrCondition</code> elementi v naraščajočem vrstnem redu. </li>        <li> Če navedete pogoj, je vrnjen seznam elementov, ki prvotno izpolnjujejo pogoj. Ko določen element ne izpolnjuje več pogoja, se nadaljnji elementi ne upoštevajo. </li> </ul>


## Examples

### Example #1 
Poiščite vrstico z najmanjšo vrednostjo v stolpcu [a] s pogojem [a] &lt; 3 v tabeli. Vrstice so razvrščene, preden uporabite filter.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Poiščite vrstico z najmanjšo vrednostjo v stolpcu [a] s pogojem [b] &lt; 3 v tabeli. Vrstice so razvrščene, preden uporabite filter.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
