---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Devolve unha táboa de navegación que contén as táboas localizadas na conta especificada dunha caixa forte de almacenamento de Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de navegación que contén unha fila para cada táboa atopada no URL da conta, `account`, dun almacén de almacenamento de Azure. Cada fila contén unha ligazón á táboa de Azure. Pódese proporcionar un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:

-   `Timeout` : Duración que controla o tempo que se debe agardar antes de abandonar unha solicitude ao servidor. O valor predefinido é específico da orixe.



## Category
Accessing data
