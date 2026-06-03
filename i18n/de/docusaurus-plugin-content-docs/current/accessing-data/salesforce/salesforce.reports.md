---
title: Salesforce.Reports
---

# Salesforce.Reports


Gibt die Berichte aus dem Salesforce-Konto zurück.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Gibt die Berichte aus dem Salesforce-Konto zurück, das in den Anmeldeinformationen angegeben wurde. Das Konto wird über die bereitgestellte Umgebung "`loginUrl`" verbunden. Wenn keine Umgebung bereitgestellt wurde, wird das Konto mit der Produktionsumgebung (https://login.salesforce.com) verbunden. Ein optionaler Datensatzparameter "`options`" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:

-   `ApiVersion` : Die Salesforce-API-Version, die für diese Abfrage verwendet werden soll. Falls keine Version festgelegt ist, wird die API-Version 29.0 verwendet.
-   `Timeout` : Eine Dauer, die steuert, wie lange gewartet wird, bevor die Anforderung an den Server abgebrochen wird. Der Standardwert ist quellspezifisch.



## Category
Accessing data
