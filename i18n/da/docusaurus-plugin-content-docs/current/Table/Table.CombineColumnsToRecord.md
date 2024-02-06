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

Kombinerer de angivne kolonner i <code>table</code> til en ny post specifik kolonne med navnet <code>newColumnName</code>, hvor hver post har feltnavne og -værdier, der svarer til kolonnenavnene og -værdierne for de kolonner, der var kombineret. Hvis der er angivet en post for <code>options</code>, kan følgende indstillinger angives:     <ul>     <li> <code>DisplayNameColumn</code>: Når det angives som tekst, indikerer det, at det angivne kolonnenavn skal behandles som postens viste navn. Dette behøver ikke være en af kolonnerne i selve posten. </li>     <li> <code>TypeName</code>: Når det angives som tekst, giver det et logisk typenavn for den oprettede post, som kan bruges under dataindlæsning til at øge funktionsmåden af indlæsningsmiljøet. </li>    </ul>    



## Category
Table.Transformation
