---
title: Python.Execute
---

# Python.Execute


Эхзςûťєѕ Þγţћοŋ šćѓĩρτ áňď řέţŭѓŉŝ đäţд ƒřåmęś


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Эхзςûťєѕ Þγţћοŋ šćѓĩρτ áňď řέţŭѓŉŝ đäţд ƒřåmęś
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



