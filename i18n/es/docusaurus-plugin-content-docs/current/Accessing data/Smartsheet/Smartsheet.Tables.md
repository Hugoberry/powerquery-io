---
title: Smartsheet.Tables
---

# Smartsheet.Tables


## Description

Devuelve una tabla de hojas, informes, carpetas y áreas de trabajo de la API de Smartsheet


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Details

Devuelve una tabla anidada de hojas, informes, carpetas y áreas de trabajo disponibles de la API de Smartsheet.


## Examples

### Example #1 
Devuelve hojas, carpetas, informes y áreas de trabajo disponibles en el nivel superior de la jerarquía de Smartsheet
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
Una tabla de carpetas, informes y áreas de trabajo del nivel superior de la jerarquía de Smartsheet
```



