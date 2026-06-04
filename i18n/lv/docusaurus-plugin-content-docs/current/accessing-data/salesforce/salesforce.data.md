---
title: Salesforce.Data
---

# Salesforce.Data


Tiek atgriezti objekti no Salesforce konta.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Tiek atgriezti objekti Salesforce kontā, kas norādīts akreditācijas datos. Konts tiek savienots, izmantojot norādīto vidi `loginUrl`. Ja vide nav norādīta, konts tiek savienots ar ražošanu (https://login.salesforce.com). Lai precizētu papildu rekvizītus, var norādīt neobligātu ieraksta parametru `options`. Ierakstā var ietvert tālāk norādītos laukus.

-   `CreateNavigationProperties` : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “false”).
-   `ApiVersion` : Šim vaicājumam izmantojamā Salesforce API versija. Ja šī vērtība nav norādīta, tiek izmantota API versija 29.0.
-   `Timeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms pamest servera pieprasījumu. Noklusējuma vērtība ir atkarīga no avota.



## Category
Accessing data
