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

Impor metrik dan data atribut mingguan dari Workplace Analytics.


## Examples

### Example #1 
Menghasilkan tabel dengan atribut yang terlihat dan metrik per minggu untuk setiap karyawan yang diukur dalam partisi.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```



