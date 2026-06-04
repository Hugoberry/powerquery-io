---
title: BuildingConnected.Contents
---

# BuildingConnected.Contents



## Syntax

```powerquery
BuildingConnected.Contents(
    optional rangeStart as DateTimeZone.Type,
    optional rangeEnd as DateTimeZone.Type,
    optional includeClosed as Logical.Type
) as table
```


## Remarks

Returns a table of entities for the given url and entity name.


## Examples

### Example #1
Get entities for a given url and entity name.
```powerquery
BuildingConnected.Contents("https://developer.api.autodesk.com")
```



