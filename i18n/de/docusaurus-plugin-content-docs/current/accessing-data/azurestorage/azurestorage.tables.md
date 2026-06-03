---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Gibt eine Navigationstabelle mit den im angegebenen Konto aus einem Azure-Speichertresor gefundenen Tabellen zurück.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Navigationstabelle mit einer Zeile für jede Tabelle zurück, die über die Konto-URL `account` in einem Azure-Speichertresor gefunden wird. Jede Zeile enthält einen Link zur Azure-Tabelle. Ein optionaler Datensatzparameter, `options`, kann zur Angabe zusätzlicher Eigenschaften angegeben werden. Der Datensatz kann die folgenden Felder enthalten:

-   `Timeout` : Eine Dauer, die steuert, wie lange gewartet wird, bevor die Anforderung an den Server abgebrochen wird. Der Standardwert ist quellspezifisch.



## Category
Accessing data
