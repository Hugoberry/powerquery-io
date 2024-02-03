---
title: PlanviewEnterprise.CallQueryService
---

# PlanviewEnterprise.CallQueryService


## Description

Enter the URL, database name associated with your Planview Portfolios account and a SQL query.


## Syntax

```powerquery
PlanviewEnterprise.CallQueryService(
    url as text,
    database as text,
    sqlQueryString as text
) as table
```


## Details

Returns a table with Planview Portfolios data.


## Examples

### Example #1 
Returns a table with Planview Portfolios data.
```powerquery
PlanviewEnterprise.CallQueryService("https://contoso.com/planview", "pve", "selecionar * de PVE_Table")
```

Result: 
```powerquery
A table of Planview Portfolios data about database pve
```



