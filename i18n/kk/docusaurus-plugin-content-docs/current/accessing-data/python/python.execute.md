---
title: Python.Execute
---

# Python.Execute


(Êжėćûтёš Ρўτђби §çяΐφť âńð гэţûŗŋŝ ďдţä ƒŕǻмĕŝ)


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
(Êжėćûтёš Ρўτђби §çяΐφť âńð гэţûŗŋŝ ďдţä ƒŕǻмĕŝ)
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



