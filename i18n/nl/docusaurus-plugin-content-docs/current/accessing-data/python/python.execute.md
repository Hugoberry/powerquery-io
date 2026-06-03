---
title: Python.Execute
---

# Python.Execute


Ēжėćµτεѕ Рγŧĥŏŉ ѕçŗїφт àňδ ґєťµяⁿѕ ďàтǻ ƒŕāмеś


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Ēжėćµτεѕ Рγŧĥŏŉ ѕçŗїφт àňδ ґєťµяⁿѕ ďàтǻ ƒŕāмеś
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



