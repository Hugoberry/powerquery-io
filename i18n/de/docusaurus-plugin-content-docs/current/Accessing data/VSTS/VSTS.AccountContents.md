---
title: VSTS.AccountContents
---

# VSTS.AccountContents


Hiermit wird die URL für Ihren Azure DevOps Analytics-Dienst eingegeben.


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Hiermit werden die über die Azure DevOps Analytics-Dienst-URL heruntergeladenen Inhalte als Binärwert zurückgegeben. Diese Funktion verwendet unterschiedliche Anmeldeinformationen für verschiedene Organisationen.


