---
title: WorkplaceAnalytics.Data
---

# WorkplaceAnalytics.Data



## Syntax

```powerquery
WorkplaceAnalytics.Data(
    scopeId as text,
    optional jobName as text,
    optional jobId as text,
    optional schemaType as text
) as table
```


## Details

Import metrik mingguan dan data atribut daripada Analitis Tempat Kerja.


## Examples

### Example #1 
Mengembalikan jadual dengan atribut yang kelihatan dan setiap metrik minggu untuk setiap pekerja yang diukur dalam petak.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```



