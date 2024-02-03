---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Returnează un tabel cu măsurători Webtrends cheie.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Efectuează un apel la punctul final Webtrends KeyMetrics și returnează toate datele ca tabel.


## Examples

### Example #1 
Extrage un tabel de măsurători cheie pentru entitatea găzduită 98765 din ultimele 30 de zile
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Un tabel de măsurători cheie
```



