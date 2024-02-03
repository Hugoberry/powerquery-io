---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Vrne tabelo z vsebino poročila iz storitve Webtrends.


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

Pokliče navedeno končno točko za poročanje v storitvi Webtrends in vrne vse podatke v obliki tabele.


## Examples

### Example #1 
Pokliče končno točko poročila o obiskovalcih v storitvi Webtrends za podatke v zadnjih 30 dneh
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Tabela s podatki obiskovalcev
```



