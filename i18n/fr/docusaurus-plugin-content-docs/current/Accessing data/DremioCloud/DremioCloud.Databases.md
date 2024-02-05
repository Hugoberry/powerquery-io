---
title: DremioCloud.Databases
---

# DremioCloud.Databases



## Syntax

```powerquery
DremioCloud.Databases(
    projectId as text,
    optional engine as text
) as table
```


## Details

Returns a table listing the datasets in the specified project on Dremio Cloud. This will be the same list as shown in Power BI Navigator. See https://docs.microsoft.com/en-us/powerquery-m/odbc-datasource. This function is maintained for backward compatibility with previous connector versions of Dremio Cloud.


## Examples

### Example #1 
How to return the list of datasets in project, xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx, on Dremio Cloud.
```powerquery
DremioCloud.Databases("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
```

Result: 
```powerquery
A table listing the datasets in project, xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
```



