---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


Retorna una taula amb el contingut de l'informe del Webtrends.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Fa una trucada a l'extrem del informes del Webtrends en qüestió i retorna totes les dades com a taula.


## Examples

### Example #1
Fa una trucada a l'extrem de l'informe de visitants del Webtrends per obtenir les dades del últims 30 dies
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Una taula de dades de visitants
```



