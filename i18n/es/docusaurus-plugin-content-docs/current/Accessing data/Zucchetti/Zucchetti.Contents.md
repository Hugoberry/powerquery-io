---
title: Zucchetti.Contents
---

# Zucchetti.Contents



## Syntax

```powerquery
Zucchetti.Contents(
    Url as text,
    Environment as text
) as table
```


## Remarks

Devuelve el contenido de VisualQuery (vqr), informes o funciones publicadas por el software Zucchetti HR


## Examples

### Example #1 
Solicitud de lista de empleados
```powerquery
    Zucchetti.Contents("https://myurl/HRPortal/", "001"),
    ERM = Origine{[idproced="ERM"]}[Data],
    ERM_query_pbi_employee = ERM{[id="ERM_query_pbi_employee"]}[Data]
```

Result: 
```powerquery
    Table containing employee list
```



