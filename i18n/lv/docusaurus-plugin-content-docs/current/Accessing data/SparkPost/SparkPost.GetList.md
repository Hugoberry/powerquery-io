---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

Šo funkciju var izmantot, lai izsauktu jebkuru SparkPost API v1 piedāvāto saraksta galapunktu. Ja SparkPost API izsaukumiem tiek izmantota šī funkcija, ņemiet vērā, ka SparkPost API ir strikts API pieprasījumu saņemšanas biežuma ierobežojums. Ja no SparkPost servera tiek atgriezts statusa kods 429, tas nozīmē, ka tika sasniegts maksimālais atļautais pieprasījumu biežums. Lai veiktu jaunus izsaukumus, nedaudz uzgaidiet.


## Examples

### Example #1 
Tiek atgriezta tabula ar vienu kolonnu, kas tiek aizpildīta ar datiem no viena SparkPost API v1 sarakstu galapunkta (papildinformāciju skatiet SparkPost dokumentācijā).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



