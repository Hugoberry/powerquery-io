---
title: DremioCloud.DatabasesByServerV330
---

# DremioCloud.DatabasesByServerV330



## Syntax

```powerquery
DremioCloud.DatabasesByServerV330(
    server as text,
    optional projectId as text,
    optional engine as text,
    optional routingTag as text,
    optional routingQueue as text
) as table
```


## Remarks

Returns a table listing the datasets on the specified server on Dremio Cloud. This will be the same list as shown in Power BI Navigator. See https://docs.microsoft.com/en-us/powerquery-m/odbc-datasource


## Examples

### Example #1 
How to return the list of datasets on a server on Dremio Cloud.
```powerquery
DremioCloud.DatabasesByServerV330("sql.dremio.cloud:443")
```

Result: 
```powerquery
A table listing the datasets on a server.
```



