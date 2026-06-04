---
title: Python.Execute
---

# Python.Execute


Ежéĉüŧêѕ Ρуτнóπ şćŕíρť дпđ я℮ťűřйŝ ďåτą ƒŗãмєš


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Ежéĉüŧêѕ Ρуτнóπ şćŕíρť дпđ я℮ťűřйŝ ďåτą ƒŗãмєš
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



