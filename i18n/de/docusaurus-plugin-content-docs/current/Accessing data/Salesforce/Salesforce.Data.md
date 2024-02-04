---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Gibt die Objekte aus dem Salesforce-Konto zurück.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Gibt die Objekte aus dem Salesforce-Konto zurück, das in den Anmeldeinformationen angegeben wurde. Das Konto wird über die bereitgestellte Umgebung "<code>loginUrl</code>" verbunden. Wenn keine Umgebung bereitgestellt wurde, wird das Konto mit der Produktionsumgebung (https://login.salesforce.com) verbunden. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>CreateNavigationProperties</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob f&#252;r die zur&#252;ckgegebenen Werte Navigationseigenschaften generiert werden sollen (Standardwert: FALSE).</li><li><code>ApiVersion</code> : Die Salesforce-API-Version, die f&#252;r diese Abfrage verwendet werden soll. Falls keine Version festgelegt ist, wird die API-Version 29.0 verwendet.</li><li><code>Timeout</code> : Eine Dauer, die steuert, wie lange gewartet wird, bevor die Anforderung an den Server abgebrochen wird. Der Standardwert ist quellspezifisch.</li></ul>    



## Category
Accessing data
