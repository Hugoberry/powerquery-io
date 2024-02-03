---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

A Webtrends jelentéstartalmát tartalmazó táblát adja vissza.


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

Hívást küld az adott Webtrends-jelentésvégpontra, és egy táblában adja vissza az összes adatot.


## Examples

### Example #1 
Hívást küld a Webtrends-látogatók jelentésvégpontjára az elmúlt 30 nap adatainak lekéréséhez
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
A látogatóadatok táblája
```



