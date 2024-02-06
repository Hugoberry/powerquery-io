---
title: SoftOneBI.Contents
---

# SoftOneBI.Contents



## Syntax

```powerquery
SoftOneBI.Contents(

) as table
```


## Remarks

Retrieves all Soft1/Atlantis tables in the datalake


## Examples

### Example #1 
Returns a table of tables from the datalake
```powerquery
SoftOneBI.Contents()
```

Result: 
```powerquery
#table({"Name"}, {"ItemKind"}, {"ItemName"}, {"Data"}, {"IsLeaf"}, {{"Companies"}, {"Table"}, {"Table"}, {"Table"}, {"true"}})
```



