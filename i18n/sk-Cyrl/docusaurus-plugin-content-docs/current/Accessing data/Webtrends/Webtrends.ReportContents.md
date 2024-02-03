---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Vráti tabuľku s obsahom zostavy zo služby Webtrends.


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

Uskutoční volanie do určitého koncového bodu zostavy služby Webtrends a vráti všetky údaje ako tabuľku.


## Examples

### Example #1 
Uskutoční volanie do koncového bodu zostavy o návštevníkoch služby Webtrends s údajmi za posledných 30 dní
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Tabuľka s údajmi o návštevníkoch
```



