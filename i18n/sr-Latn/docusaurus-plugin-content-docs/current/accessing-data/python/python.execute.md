---
title: Python.Execute
---

# Python.Execute


Ė×ęčύťêѕ Þýŧħǿň ŝċřίþť άлď ŗéţΰřηş δªτà ƒґªмёś


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Ė×ęčύťêѕ Þýŧħǿň ŝċřίþť άлď ŗéţΰřηş δªτà ƒґªмёś
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



