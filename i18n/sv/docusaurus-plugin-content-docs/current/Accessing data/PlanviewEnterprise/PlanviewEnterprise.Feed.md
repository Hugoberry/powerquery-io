---
title: PlanviewEnterprise.Feed
---

# PlanviewEnterprise.Feed


## Description

Enter the URL and database name associated with your Planview Portfolios account.


## Syntax

```powerquery
PlanviewEnterprise.Feed(
    url as text,
    database as text
) as table
```


## Details

Returns a table with Planview Portfolios data.


## Examples

### Example #1 
Returns a table of Planview Portfolios information
```powerquery
PlanviewEnterprise.Feed("https://contoso.com/planview", "pve")
```

Result: 
```powerquery
A table of Planview Portfolios data about database pve
```



