---
title: Python.Execute
---

# Python.Execute


厓厓ミ穐Executes Python script and returns data frames


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
厓厓ミ穐Executes Python script and returns data frames
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



