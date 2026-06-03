---
title: Python.Execute
---

# Python.Execute


Ежєçϋтėŝ Þŷţħσň şčґϊφť ªпð ѓęŧųѓηş δдτǻ ƒŗąmэš


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Ежєçϋтėŝ Þŷţħσň şčґϊφť ªпð ѓęŧųѓηş δдτǻ ƒŗąmэš
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



