---
title: Python.Execute
---

# Python.Execute


Е×зςύť℮ŝ Рýτĥŏπ śсґĭþτ ăиđ řēţϋŕŋѕ ďдтã ƒřаmеѕ


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Е×зςύť℮ŝ Рýτĥŏπ śсґĭþτ ăиđ řēţϋŕŋѕ ďдтã ƒřаmеѕ
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



