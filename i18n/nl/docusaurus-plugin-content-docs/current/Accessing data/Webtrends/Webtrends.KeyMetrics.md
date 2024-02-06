---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


Hiermee wordt een tabel met metrische sleutelgegevens van Webtrends geretourneerd.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Hiermee wordt een aanroep verzonden naar het Webtrends KeyMetrics-eindpunt en worden alle gegevens geretourneerd als een tabel.


## Examples

### Example #1 
Hiermee wordt een tabel met metrische sleutelgegevens voor tenant 98765 van de afgelopen 30 dagen opgehaald
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Een tabel met metrische sleutelgegevens
```



