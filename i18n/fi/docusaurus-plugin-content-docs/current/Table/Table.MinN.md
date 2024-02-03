---
title: Table.MinN
---

# Table.MinN


## Description

Palauttaa pienimmät rivit käyttäen annettua ehtoa.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Palauttaa pienimmät rivit kohteessa <code>table</code>, kun <code>comparisonCriteria</code> on annettu. Kun rivit on lajiteltu, parametri <code>countOrCondition</code> täytyy määrittää, jotta tulosta voidaan suodattaa lisää. Huomaa, että lajittelualgoritmi ei voi taata mitään kiinteää lajiteltua tulosta. Parametri <code>countOrCondition</code> voi olla useassa muodossa:    <ul>        <li> Jos luku määritetään, palautetaan enintään <code>countOrCondition</code> kohteen luettelo nousevassa järjestyksessä. </li>        <li> Jos ehto määritetään, palautetaan luettelo kohteita, jotka täyttävät kyseisen ehdon aluksi. Kun jokin kohde ei täytä ehtoa, muita kohteita ei enää arvioida. </li> </ul>


## Examples

### Example #1 
Etsi rivi, jolla on pienin arvo sarakkeessa [a] käyttäen ehtoa [a] &lt; 3 taulukossa. Rivit lajitellaan, ennen kuin suodatin otetaan käyttöön.
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
Etsi rivi, jolla on pienin arvo sarakkeessa [a] käyttäen ehtoa [b] &lt; 0 taulukossa. Rivit lajitellaan, ennen kuin suodatin otetaan käyttöön.
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
