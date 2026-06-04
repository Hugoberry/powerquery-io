---
title: Table.Profile
---

# Table.Profile


Επιστρέφει ένα προφίλ των στηλών ενός πίνακα.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Επιστρέφει ένα προφίλ για τις στήλες στο `table`.

Επιστρέφονται οι ακόλουθες πληροφορίες για κάθε στήλη (όπου ισχύουν):

-   ελάχιστο
-   μέγιστο
-   μέσος όρος
-   τυπική απόκλιση
-   πλήθος
-   πλήθος null
-   διακριτό πλήθος



## Category
Table.Information
