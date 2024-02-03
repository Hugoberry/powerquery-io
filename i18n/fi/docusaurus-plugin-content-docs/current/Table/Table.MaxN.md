---
title: Table.MaxN
---

# Table.MaxN


## Description

Palauttaa suurimmat rivit käyttäen annettua ehtoa.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Palauttaa suurimmat rivit kohteessa <code>table</code>, kun <code>comparisonCriteria</code> on annettu.    Kun rivit on lajiteltu, parametri <code>countOrCondition</code> täytyy määrittää, jotta tulosta voidaan suodattaa lisää. Huomaa, että lajittelualgoritmi ei voi taata mitään kiinteää lajiteltua tulosta. Parametri <code>countOrCondition</code> voi olla useassa muodossa:    <ul>        <li> Jos luku määritetään, palautetaan enintään <code>countOrCondition</code> kohteen luettelo nousevassa järjestyksessä. </li>        <li> Jos ehto määritetään, palautetaan luettelo kohteita, jotka täyttävät kyseisen ehdon aluksi. Kun jokin kohde ei täytä ehtoa, muita kohteita ei enää arvioida. </li> </ul>


## Examples

### Example #1 
Etsi rivi, jolla on suurin arvo sarakkeessa [a] käyttäen ehtoa [a] &gt; 0 taulukossa. Rivit lajitellaan, ennen kuin suodatin otetaan käyttöön.
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
Etsi rivi, jolla on suurin arvo sarakkeessa [a] käyttäen ehtoa [b] &gt; 0 taulukossa. Rivit lajitellaan, ennen kuin suodatin otetaan käyttöön.
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
