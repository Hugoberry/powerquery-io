---
title: SumTotal.ODataFeed
---

# SumTotal.ODataFeed



## Syntax

```powerquery
SumTotal.ODataFeed(
    URL as Uri.Type
) as table
```


## Details

SumTotal's Custom connector connects to SumTotal's external facing OData API service to pull data from data warehousing database . Filter expand, slice and create customer visuals and reports based on data returned from the OData feed


## Examples

### Example #1 
Returns a table with specified entity data
```powerquery
SumTotal.ODataFeed('https://host.sumtotalystems.com/?rowVersionId=0')
```

Result: 
```powerquery
 Source{[Name='{OData Entity chosen}']}[Data]
```



