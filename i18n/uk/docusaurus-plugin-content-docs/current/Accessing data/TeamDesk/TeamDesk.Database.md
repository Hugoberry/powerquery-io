---
title: TeamDesk.Database
---

# TeamDesk.Database



## Syntax

```powerquery
TeamDesk.Database(
    URL as Uri.Type
) as table
```


## Details

Connects to TeamDesk database and let you select a table and a view to retrieve the data from.


## Examples

### Example #1 
Connect to sample TeamDesk database
```powerquery
TeamDesk.Database("https://www.teamdesk.net/secure/db/57692")
```

Result: 
```powerquery
Navigation table
```



