---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Vrátí tabulku s obsahem sestavy z Webtrends.


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

Provede volání daného koncového bodu generování sestav Webtrends a vrátí všechna data jako tabulku.


## Examples

### Example #1 
Provede volání koncového bodu sestavy návštěvníků Webtrends pro data za posledních 30 dní.
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Tabulka dat návštěvníků
```



