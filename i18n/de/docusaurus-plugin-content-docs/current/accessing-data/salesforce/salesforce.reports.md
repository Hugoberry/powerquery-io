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

Gibt die Berichte aus dem Salesforce-Konto zurück, das in den Anmeldeinformationen angegeben wurde. Das Konto wird über die bereitgestellte Umgebung "<code>loginUrl</code>" verbunden. Wenn keine Umgebung bereitgestellt wurde, wird das Konto mit der Produktionsumgebung (https://login.salesforce.com) verbunden. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>ApiVersion</code> : Die Salesforce-API-Version, die f&#252;r diese Abfrage verwendet werden soll. Falls keine Version festgelegt ist, wird die API-Version 29.0 verwendet.</li><li><code>Timeout</code> : Eine Dauer, die steuert, wie lange gewartet wird, bevor die Anforderung an den Server abgebrochen wird. Der Standardwert ist quellspezifisch.</li></ul>    



## Category
Accessing data
