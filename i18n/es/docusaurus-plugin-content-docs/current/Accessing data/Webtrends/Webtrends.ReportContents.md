---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Devuelve una tabla con el contenido del informe de Webtrends.


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

Realiza una llamada al punto de conexión de informes de Webtrends en cuestión y devuelve todos los datos en forma de tabla.


## Examples

### Example #1 
Realiza una llamada al punto de conexión de informes de visitantes de Webtrends para obtener los datos de los últimos 30 días
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Una tabla de datos de los visitantes
```



