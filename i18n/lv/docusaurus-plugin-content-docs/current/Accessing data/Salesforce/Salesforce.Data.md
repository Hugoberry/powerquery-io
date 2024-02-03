---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Tiek atgriezti objekti no Salesforce konta.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Tiek atgriezti objekti Salesforce kontā, kas norādīts akreditācijas datos. Konts tiek savienots, izmantojot norādīto vidi <code>loginUrl</code>. Ja vide nav norādīta, konts tiek savienots ar ražošanu (https://login.salesforce.com). Lai precizētu papildu rekvizītus, var norādīt neobligātu ieraksta parametru <code>options</code>. Ierakstā var ietvert tālāk norādītos laukus.    <ul><li><code>CreateNavigationProperties</code> : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “false”).</li><li><code>ApiVersion</code> : Šim vaicājumam izmantojamā Salesforce API versija. Ja šī vērtība nav norādīta, tiek izmantota API versija 29.0.</li><li><code>Timeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms pamest servera pieprasījumu. Noklusējuma vērtība ir atkarīga no avota.</li></ul>    



## Category
Accessing data
