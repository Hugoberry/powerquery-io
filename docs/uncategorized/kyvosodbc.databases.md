---
title: KyvosODBC.Databases
---

# KyvosODBC.Databases



## Syntax

```powerquery
KyvosODBC.Databases(
    server as text,
    httpPath as text,
    encryption as text
) as table
```


## Remarks

Returns a table listing the datasets on Kyvos Server. This will be the same list as shown in Power BI Navigator


## Examples

### Example #1
How to return the list of datasets
```powerquery
Kyvos.Databases("localhost:8081")
```

Result: 
```powerquery
A table listing the datasets
```



