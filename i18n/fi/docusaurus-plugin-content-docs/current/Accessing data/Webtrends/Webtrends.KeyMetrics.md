---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Palauttaa tärkeiden Webtrends-mittareiden taulukon.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Tekee kutsun Webtrends KeyMetrics -päätepisteelle ja palauttaa kaikki tiedot taulukkona.


## Examples

### Example #1 
Noutaa tärkeiden mittareiden taulukon vuokralaiselle 98765 viimeisten 30 päivän ajalta
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Tärkeiden mittareiden taulukko
```



