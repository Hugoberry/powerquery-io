---
title: Python.Execute
---

# Python.Execute


(Е×ěćùτёş ÞУтћòņ §сřΐφţ ªлδ язтüгñŝ δąτά ƒřâмęš)


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
(Е×ěćùτёş ÞУтћòņ §сřΐφţ ªлδ язтüгñŝ δąτά ƒřâмęš)
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



