---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Vráti tabuľku s dostupnou metrikou z rozhrania SparkPost API v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Details

Túto funkciu možno použiť na načítanie údajov z konkrétneho koncového bodu Metrics v rozhraní SparkPost API v1. Pri obnovovaní týchto tabuliek alebo volaní rozhrania SparkPost API pomocou tohto konektora majte na pamäti, že rozhranie SparkPost API má prísne obmedzený počet volaní rozhrania API. Ak vidíte, že server SparkPost vráti kód stavu 429, znamená to, že ste dosiahli limit počtu volaní a pred ďalším volaním budete musieť chvíľu počkať. Pri výbere hodnoty pre parameter Počet dní nezabudnite, že toto rozhranie API ukladá údaje iba za posledných 6 mesiacov.


## Examples

### Example #1 
Načíta metriky doručiteľnosti count_sent a count_rejected pre všetky campaign_ids agregované za posledné tri dni. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabuľka
```



