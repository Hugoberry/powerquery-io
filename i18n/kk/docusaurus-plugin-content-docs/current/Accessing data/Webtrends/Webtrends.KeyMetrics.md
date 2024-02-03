---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Негізгі Webtrends көрсеткіштерімен бірге кестені қайтарады.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Webtrends KeyMetrics соңғы нүктесіне қоңырау шалады және барлық деректерді кесте ретінде қайтарады.


## Examples

### Example #1 
Соңғы 30 күн ішінде 98765 клиент үшін негізгі көрсеткіштердің кестесін қайтарады
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Негізгі көрсеткіштердің кестесі
```



