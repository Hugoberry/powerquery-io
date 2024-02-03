---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Devolve unha táboa de navegación que contén as táboas localizadas na conta especificada dunha caixa forte de almacenamento de Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa de navegación que contén unha fila por cada táboa atopada no URL da conta, <code>account</code>, dun almacén de Azure Storage. Cada fila contén unha ligazón á táboa de Azure. É posible que se forneza un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:    <ul><li><code>Timeout</code> : Duraci&#243;n que controla o tempo que se debe agardar antes de abandonar unha solicitude ao servidor. O valor predefinido &#233; espec&#237;fico da orixe.</li></ul>



## Category
Accessing data
