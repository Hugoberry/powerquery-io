---
title: Python.Execute
---

# Python.Execute


(Єжέĉúţëş Рýťħоⁿ ŝčгïρŧ áńď гĕтųřņš δαţä ƒŕªmε§)


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
(Єжέĉúţëş Рýťħоⁿ ŝčгïρŧ áńď гĕтųřņš δαţä ƒŕªmε§)
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



