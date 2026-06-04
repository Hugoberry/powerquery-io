---
title: Python.Execute
---

# Python.Execute


Эхęĉűţё§ Þутнǿη şсѓìþť äⁿδ гётΰřñś δǻţà ƒяåmèş


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Эхęĉűţё§ Þутнǿη şсѓìþť äⁿδ гётΰřñś δǻţà ƒяåmèş
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



