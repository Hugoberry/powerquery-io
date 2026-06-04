---
title: Salesforce.Reports
---

# Salesforce.Reports


Tiek atgriezta atskaite no Salesforce konta.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Tiek atgrieztas atskaites Salesforce kontā, kas norādīts akreditācijas datos. Konts tiek savienots, izmantojot norādīto vidi `loginUrl`. Ja vide nav norādīta, konts tiek savienots ar ražošanu (https://login.salesforce.com). Lai precizētu papildu rekvizītus, var norādīt neobligātu ieraksta parametru `options`. Ierakstā var ietvert tālāk norādītos laukus.

-   `ApiVersion` : Šim vaicājumam izmantojamā Salesforce API versija. Ja šī vērtība nav norādīta, tiek izmantota API versija 29.0.
-   `Timeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms pamest servera pieprasījumu. Noklusējuma vērtība ir atkarīga no avota.



## Category
Accessing data
