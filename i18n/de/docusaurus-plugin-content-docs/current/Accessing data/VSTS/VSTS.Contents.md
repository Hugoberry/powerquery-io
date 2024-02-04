---
title: VSTS.Contents
---

# VSTS.Contents


## Description

Hiermit wird die URL für Ihren Azure DevOps Analytics-Dienst eingegeben.


## Syntax

```powerquery
VSTS.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Hiermit werden die über die Azure DevOps Analytics-Dienst-URL heruntergeladenen Inhalte als Binärwert zurückgegeben. Diese Funktion verwendet globale Anmeldeinformationen für alle zugänglichen Organisationen.


