---
title: HdInsight.Containers
---

# HdInsight.Containers


Returns a navigational table containing the containers found in the specified account from an Azure storage vault.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Remarks

Returns a navigational table containing a row for each container found at the account URL, <code>account</code>, from an Azure storage vault. Each row contains a link to the container blobs.



## Category
Accessing data
