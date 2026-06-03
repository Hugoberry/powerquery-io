---
title: LEAP.Contents
---

# LEAP.Contents


Returns a table with relevant LEAP data.


## Syntax

```powerquery
LEAP.Contents(

) as table
```



## Examples

### Example #1
Returns a table with relevant LEAP data.
```powerquery
LEAP.Contents
```

Result: 
```powerquery
#table({Name, Key, Data, ItemKind, ItemName, IsLeaf}, {
                    { Matters & Clients, MC , Table, Folder, Table, false },
                    { Firm, F , Table, Folder, Table, false },
                    { officeSectionAlias, OF, Table, Folder, Table, false},
                    { Management, MGMT, CreateManagementFolder(), Folder, Table, false},
                    { trustSectionAlias, TR, CreateTrustFolder(trustAlias, controlledMoneyAlias), Folder, Table, false},
                    { Custom Function, Q , CreateCustomDateRangeTable(), Folder, Folder, false }
                })
```



