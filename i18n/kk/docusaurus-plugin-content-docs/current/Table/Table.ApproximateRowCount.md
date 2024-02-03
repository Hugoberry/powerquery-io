---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Кестедегі жолдардың шамамен санын қайтарады.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

<code>table</code> ішіндегі жолдардың жуықталған санын немесе деректер көзі жуық мәнді қолдамаса, қатені қайтарады.


## Examples

### Example #1 
Үлкен кестеде ерекше қала және облыс тіркесімдерін болжайды, мұны бағандар үшін элементтер санының болжамы ретінде пайдалануға болады. Элементтер санының болжамдары жеткілікті маңызды, сондықтан әртүрлі деректер көздері (мысалы, SQL Server) нақ осы жуықтауды қолдайды (ол үшін HyperLogLog алгоритмін жиі пайдаланады).
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
