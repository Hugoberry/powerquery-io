---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Zwraca tabelę dostępnych metryk z interfejsu API usługi SparkPost w wersji 1


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

Ta funkcja umożliwia pobieranie danych z określonego punktu końcowego „Metrics” interfejsu API SparkPost w wersji 1. Podczas odświeżania tych tabel lub wywoływania interfejsu API SparkPost przy użyciu tego łącznika należy pamiętać, że interfejs API SparkPost ma ścisły limit szybkości interfejsu API. Jeśli z serwera SparkPost jest zwracany kod stanu 429, oznacza to, że osiągnięto limit szybkości i trzeba chwilę poczekać przed wykonaniem kolejnych wywołań. W przypadku wybierania wartości parametru liczby dni należy zauważyć, że w interfejsie API są przechowywane dane tylko z 6 miesięcy.


## Examples

### Example #1 
Pobiera metryki skuteczności count_sent i count_rejected dla wszystkich elementów campaign_ids zagregowanych w ciągu ostatnich trzech dni.
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabela
```



