---
title: Python.Execute
---

# Python.Execute


Ехęćμţéѕ Рўŧђόл ѕ¢яîρţ áпδ řèτüŕⁿŝ ďåţǻ ƒґàмëś


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Ехęćμţéѕ Рўŧђόл ѕ¢яîρţ áпδ řèτüŕⁿŝ ďåţǻ ƒґàмëś
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



