---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Vrne tabelo s ključnimi metrikami storitve Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Pokliče končno točko za ključne metrike v storitvi Webtrends in vrne vse podatke v obliki tabele.


## Examples

### Example #1 
Pridobi tabelo s ključnimi metrikami za najemnika 98765 z zadnjih 30 dni
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Tabela s ključnimi metrikami
```



