---
title: Dremio.DatabasesV370
---

# Dremio.DatabasesV370



## Syntax

```powerquery
Dremio.DatabasesV370(
    server as text,
    encryption as text,
    optional engine as text,
    optional routingTag as text,
    optional routingQueue as text,
    optional options as record
) as table
```


## Remarks

Returns a table listing the datasets on Dremio Server. This will be the same list as shown in Power BI Navigator. See https://docs.microsoft.com/en-us/powerquery-m/odbc-datasource


## Examples

### Example #1
How to return the list of datasets on localhost with an encrypted connection.
```powerquery
Dremio.DatabasesV370("localhost:31010","Enabled")
```

Result: 
```powerquery
A table listing the datasets on localhost.
```



