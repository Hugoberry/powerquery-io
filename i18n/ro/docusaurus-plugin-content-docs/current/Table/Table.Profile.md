---
title: Table.Profile
---

# Table.Profile


## Description

Returnează un profil al coloanelor unui tabel.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Returnează un profil pentru coloanele din <code>table</code>.<br />Sunt returnate următoarele informații pentru fiecare coloană (când este cazul):<ul>  <li>minim</li>  <li>maxim</li>  <li>medie</li>  <li>deviație standard</li>  <li>contor</li>  <li>contor nule</li>  <li>număr distinct</li></ul><br />



## Category
Table.Information
