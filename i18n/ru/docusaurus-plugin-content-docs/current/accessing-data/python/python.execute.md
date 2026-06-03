---
title: Python.Execute
---

# Python.Execute


∑×êсũτзś Þўŧħοή śčѓîρţ äņđ ѓęťűřηѕ ďãтå ƒřăмèѕ


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
∑×êсũτзś Þўŧħοή śčѓîρţ äņđ ѓęťűřηѕ ďãтå ƒřăмèѕ
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



