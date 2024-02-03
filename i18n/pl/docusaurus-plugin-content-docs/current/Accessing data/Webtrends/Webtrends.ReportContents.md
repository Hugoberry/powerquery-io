---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Zwraca tabelę z zawartością raportu z rozwiązania Webtrends.


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

Tworzy wywołanie podanego punktu końcowego raportowania rozwiązania Webtrends i zwraca wszystkie dane w postaci tabeli.


## Examples

### Example #1 
Tworzy wywołanie do punktu końcowego raportu elementów odwiedzających rozwiązania Webtrends dotyczące danych z ostatnich 30 dni
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Tabela danych elementów odwiedzających
```



