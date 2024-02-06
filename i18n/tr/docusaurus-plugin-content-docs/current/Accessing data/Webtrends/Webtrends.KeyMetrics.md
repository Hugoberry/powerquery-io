---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


Webtrends ile ilgili ana ölçümlerin yer aldığı bir tablo döndürür.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Webtrends KeyMetrics uç noktasına çağrıda bulunur ve tüm verileri bir tablo olarak döndürür.


## Examples

### Example #1 
98765 kiracısı için son 30 güne ilişkin ana ölçümlerin yer aldığı bir tablo çeker
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Ana ölçümlerin yer aldığı bir tablo
```



