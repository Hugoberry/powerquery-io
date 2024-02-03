---
title: Table.Profile
---

# Table.Profile


## Description

Palauttaa taulukon sarakkeiden profiilin.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Palauttaa profiilin sarakkeille kohteessa <code>table</code>.<br />Seuraavat tiedot palautetaan kullekin sarakkeelle (tilanteen mukaan):<ul>  <li>vähimmäisarvo</li>  <li>enimmäisarvo</li>  <li>keskiarvo</li>  <li>keskihajonta</li>  <li>määrä</li>  <li>tyhjäarvojen määrä</li>  <li>erillisten määrä</li></ul><br />



## Category
Table.Information
