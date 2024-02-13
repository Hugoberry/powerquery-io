---
title: Type.ForRecord
---

# Type.ForRecord


उस प्रकार को लौटाता है जो फ़ील्ड्स पर विशिष्ट प्रकार के प्रतिबंधों के साथ रिकॉर्ड्स का प्रतिनिधित्व करता है.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Remarks

उस प्रकार को लौटाता है जो फ़ील्ड्स पर विशिष्ट प्रकार के प्रतिबंधों के साथ रिकॉर्ड्स का प्रतिनिधित्व करता है.


## Examples

### Example #1 
गतिशील रूप से तालिका प्रकार जनरेट करें.
```powerquery
let
    columnNames = {"Name", "Score"},
    columnTypes = {type text, type number},
    rowColumnTypes = List.Transform(columnTypes, (t) => [Type = t, Optional = false]),
    rowType = Type.ForRecord(Record.FromList(rowColumnTypes, columnNames), false)
in
    #table(type table rowType, {{"Betty", 90.3}, {"Carl", 89.5}})
```

Result: 
```powerquery
#table(
    type table [Name = text, Score = number],
    {{"Betty", 90.3}, {"Carl", 89.5}}
)
```




## Category
Type
