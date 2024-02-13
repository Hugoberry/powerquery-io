---
title: InformationGrid.Contents
---

# InformationGrid.Contents



## Syntax

```powerquery
InformationGrid.Contents(
    server as text
) as table
```


## Remarks

Retrieves information from authorised BI services available on the given server


## Examples

### Example #1 
Returns a Navigation Table listing the available Information Grid BI services
```powerquery
InformationGrid.Contents("192.168.1.123", false)
```

Result: 
```powerquery
(Navigation table listing available BI services)
```


### Example #2 
Returns information from a specific named Information Grid BI service using HTTP
```powerquery
InformationGrid.Contents("igserver.somedomain.com", true){[Service="service-name"]}[Data]
```

Result: 
```powerquery
(Data retrieved for the named BI service)
```



