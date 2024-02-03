---
title: AzureDevOpsServer.AccountContents
---

# AzureDevOpsServer.AccountContents


## Description

Zadejte URL vaší služby Azure DevOps Analytics Service.


## Syntax

```powerquery
AzureDevOpsServer.AccountContents(
    url as text,
    optional options as record
) as table
```


## Details

Vrátí obsah stažený z adresy URL Azure DevOps Analytics Service jako binární hodnotu. Tato funkce používá různé přihlašovací údaje pro různé organizace.


