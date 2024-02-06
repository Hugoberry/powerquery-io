---
title: AzureDevOpsServer.AccountContents
---

# AzureDevOpsServer.AccountContents


Hiermit wird die URL für Ihren Azure DevOps Analytics-Dienst eingegeben.


## Syntax

```powerquery
AzureDevOpsServer.AccountContents(
    url as text,
    optional options as record
) as table
```


## Remarks

Hiermit werden die über die Azure DevOps Analytics-Dienst-URL heruntergeladenen Inhalte als Binärwert zurückgegeben. Diese Funktion verwendet unterschiedliche Anmeldeinformationen für verschiedene Organisationen.


