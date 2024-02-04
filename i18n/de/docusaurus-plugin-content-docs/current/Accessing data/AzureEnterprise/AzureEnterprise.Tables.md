---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Geben Sie die URL des Azure Enterprise-REST-API-Endpunkts an, der Ihrer Registrierung zugeordnet ist.


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Gibt eine Liste der verfügbaren Berichte und Monate aus der Azure Enterprise-API zurück.


## Examples

### Example #1 
Verwendet die AzureEnterprise.Tables-Funktion und navigiert zu einem bestimmten Wert, um die Ergebnisse abzurufen.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Tabelle
```



