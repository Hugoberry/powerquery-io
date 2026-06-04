---
title: Python.Execute
---

# Python.Execute


Ęжęςūťέś Ρýťнøň ѕċŗϊрŧ ãлð řěţΰřⁿѕ ďăţα ƒŗăмēś


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Ęжęςūťέś Ρýťнøň ѕċŗϊрŧ ãлð řěţΰřⁿѕ ďăţα ƒŗăмēś
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



