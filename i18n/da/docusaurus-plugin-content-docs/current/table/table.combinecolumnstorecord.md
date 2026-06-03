---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Kombinerer de angivne kolonner i en ny postvurderet kolonne, hvor de enkelte poster har feltnavne og værdier, der svarer til kolonnenavnene og værdierne for de kolonner, der blev kombineret.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Kombinerer de angivne kolonner i `table` til en ny post specifik kolonne med navnet `newColumnName`, hvor hver post har feltnavne og -værdier, der svarer til kolonnenavnene og -værdierne for de kolonner, der var kombineret. Hvis der er angivet en post for `options`, kan følgende indstillinger angives:

-   `DisplayNameColumn`: Når det angives som tekst, indikerer det, at det angivne kolonnenavn skal behandles som postens viste navn. Dette behøver ikke være en af kolonnerne i selve posten.
-   `TypeName`: Når det angives som tekst, giver det et logisk typenavn for den oprettede post, som kan bruges under dataindlæsning til at øge funktionsmåden af indlæsningsmiljøet.



## Category
Table.Transformation
