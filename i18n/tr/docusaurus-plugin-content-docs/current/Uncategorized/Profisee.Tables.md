---
title: Profisee.Tables
---

# Profisee.Tables



## Syntax

```powerquery
Profisee.Tables(
    URL as Uri.Type
) as table
```


## Details

Navigation Table returning Profisee entities.


## Examples

### Example #1 
Returns a navigational table containing all profisee entities that contains data for each entity.
```powerquery
Profisee.Tables("https://12345.com/profisee")
```

Result: 
```powerquery
#table({"Name", "Data", "ItemKind", "ItemName"}, {{"ABCCode", "Table", "Table", "Table"}})
```



