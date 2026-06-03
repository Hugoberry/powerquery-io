---
title: Python.Execute
---

# Python.Execute


Ĕхèςûτęѕ ÞУŧћόň §ćѓίþť аⁿđ ѓèťϋŗņѕ đâτā ƒŕàм℮ѕ


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Ĕхèςûτęѕ ÞУŧћόň §ćѓίþť аⁿđ ѓèťϋŗņѕ đâτā ƒŕàм℮ѕ
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



