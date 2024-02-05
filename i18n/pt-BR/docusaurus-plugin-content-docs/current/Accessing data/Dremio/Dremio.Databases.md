---
title: Dremio.Databases
---

# Dremio.Databases



## Syntax

```powerquery
Dremio.Databases(
    server as text,
    optional engine as text,
    optional routingTag as text,
    optional routingQueue as text
) as table
```


## Details

Returns a table listing the datasets on Dremio Server. This will be the same list as shown in Power BI Navigator. See https://docs.microsoft.com/en-us/powerquery-m/odbc-datasource


## Examples

### Example #1 
How to return the list of datasets on localhost. This uses the default encrypted connection.
```powerquery
Dremio.Databases("localhost:31010")
```

Result: 
```powerquery
A table listing the datasets on localhost.
```



