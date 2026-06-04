---
title: Table.Profile
---

# Table.Profile


Pateikiamas lentelės stulpelių profilis.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Pateikiamas `table` esančių stulpelių profilis.

Pateikiama šį kiekvieno stulpelio informacija (kai taikoma):

-   mažiausia reikšmė
;-   didžiausia reikšmė
;-   vidurkis
;-   standartinis nuokrypis
;-   skaičius
;-   neapibrėžtų reikšmių skaičius
;-   skirtingų reikšmių skaičius
.



## Category
Table.Information
