---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Vrátí tabulku dostupných metrik z rozhraní SparkPost API v1.


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

Tuto funkci jde použít k načtení dat z konkrétního koncového bodu „Metric“ v rozhraní SparkPost API v1. Při aktualizaci těchto tabulek nebo volání rozhraní SparkPost API pomocí tohoto konektoru mějte na paměti, že rozhraní SparkPost API má striktní limit četnosti volání rozhraní API. Pokud vidíte, že server SparkPost vrací stavový kód 429, dosáhli jste tohoto limitu četnosti a před dalším voláním bude nutné chvíli počkat. Při výběru hodnoty pro parametr „Počet dní“ pamatujte, že toto rozhraní API ukládá data jen za 6 měsíců.


## Examples

### Example #1 
Načte metriky doručitelnosti count_sent a count_rejected pro všechny campaign_ids agregované za poslední tři dny. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabulka
```



