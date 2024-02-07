---
title: MailChimp.Collection
---

# MailChimp.Collection


Devuelve una tabla con datos desde un punto de conexión de MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Remarks

Realiza una llamada a la API de MailChimp y devuelve el conjunto de datos resultante en forma de tabla. Pasa por todos los resultados automáticamente. El parámetro opcional entityName puede usarse para los puntos de conexión de la API en los que el punto de conexión raíz y el parámetro entityName principal en la respuesta de JSON no coinciden.


## Examples

### Example #1 
Extrae una tabla de datos desde el punto de conexión de listas de la API de MailChimp.
```powerquery
MailChimp.Collection("listas")
```

Result: 
```powerquery
Una tabla con datos de lista.
```


### Example #2 
Extrae una tabla de datos desde el punto de conexión de carpetas de campaña de la API de MailChimp.
```powerquery
MailChimp.Collection("carpetas de campaña", "carpetas")
```

Result: 
```powerquery
Una tabla con datos de carpetas de campaña.
```



