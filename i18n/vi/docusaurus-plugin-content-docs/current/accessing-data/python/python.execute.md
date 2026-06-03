---
title: Python.Execute
---

# Python.Execute


(Éхęċцτēѕ Рỳŧђőл ѕčřĩþτ άⁿδ ѓéťцŗņś δαŧã ƒядмє§)


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
(Éхęċцτēѕ Рỳŧђőл ѕčřĩþτ άⁿδ ѓéťцŗņś δαŧã ƒядмє§)
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



