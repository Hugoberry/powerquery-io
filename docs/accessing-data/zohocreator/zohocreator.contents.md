---
title: ZohoCreator.Contents
---

# ZohoCreator.Contents



## Syntax

```powerquery
ZohoCreator.Contents(
    creatordomain as text,
    scopname as text,
    applinkname as text,
    reportlinkname as text
) as any
```


## Remarks

This connector will fetch data only from Zoho Creator application reports


## Examples

### Example #1
To fetches data from US account, scope 'jack', application 'task-management', report 'Task\_Details'
```powerquery
ZohoCreator.Contents("zoho.com", "jack", "zylker-management", "Employee_Details")
```

Result: 
```powerquery
#table({"Column1"}, {{"Column2"}, {"Column3"}})
```



