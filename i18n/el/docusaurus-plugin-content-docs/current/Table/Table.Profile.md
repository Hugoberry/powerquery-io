---
title: Table.Profile
---

# Table.Profile


## Description

Επιστρέφει ένα προφίλ των στηλών ενός πίνακα.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Επιστρέφει ένα προφίλ για τις στήλες στο <code>table</code>.<br />Επιστρέφονται οι ακόλουθες πληροφορίες για κάθε στήλη (όπου ισχύουν):<ul>  <li>ελάχιστο</li>  <li>μέγιστο</li>  <li>μέσος όρος</li>  <li>τυπική απόκλιση</li>  <li>πλήθος</li>  <li>πλήθος null</li>  <li>διακριτό πλήθος</li></ul><br />



## Category
Table.Information
