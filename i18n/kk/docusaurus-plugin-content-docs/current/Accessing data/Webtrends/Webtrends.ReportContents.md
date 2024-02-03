---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Webtrends ішінен контент есебі бар кестені қайтарады.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Берілген Webtrends есеп беру соңғы нүктесіне қоңырау шалады және барлық деректерді кесте ретінде қайтарады.


## Examples

### Example #1 
Соңғы 30 күн ішіндегі деректер үшін Webtrends кірушілері есептерінің соңғы нүктесіне қоңырау шалады
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Кіруші деректерінің кестесі
```



