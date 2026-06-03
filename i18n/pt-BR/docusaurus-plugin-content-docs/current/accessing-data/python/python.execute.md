---
title: Python.Execute
---

# Python.Execute


Êжέсůтęş Ργŧнǿπ šçřìþτ ǻňđ гêťűяňš ðǻţã ƒяāмέŝ


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Êжέсůтęş Ργŧнǿπ šçřìþτ ǻňđ гêťűяňš ðǻţã ƒяāмέŝ
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



