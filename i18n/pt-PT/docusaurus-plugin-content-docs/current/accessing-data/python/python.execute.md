---
title: Python.Execute
---

# Python.Execute


Эхεсϋτêş РУţĥσй şςŕїрť ąήð ѓēťΰŕйѕ đάтд ƒŗαmęś


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Эхεсϋτêş РУţĥσй şςŕїрť ąήð ѓēťΰŕйѕ đάтд ƒŗαmęś
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



