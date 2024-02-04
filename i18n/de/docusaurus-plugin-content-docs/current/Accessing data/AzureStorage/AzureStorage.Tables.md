---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Gibt eine Navigationstabelle mit den im angegebenen Konto aus einem Azure-Speichertresor gefundenen Tabellen zurück.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Gibt eine Navigationstabelle mit einer Zeile für jede Tabelle zurück, die über die Konto-URL <code>account</code> in einem Azure-Speichertresor gefunden wird. Jede Zeile enthält einen Link zur Azure-Tabelle. Optional kann ein Datensatzparameter "<code>options</code>" angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>Timeout</code> : Eine Dauer, die steuert, wie lange gewartet wird, bevor die Anforderung an den Server abgebrochen wird. Der Standardwert ist quellspezifisch.</li></ul>



## Category
Accessing data
