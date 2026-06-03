---
title: Python.Execute
---

# Python.Execute


Έжèčúţê§ Рÿţнбп ѕčяїþţ ąпð гєťùѓñѕ ďăţã ƒѓąmз§


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Έжèčúţê§ Рÿţнбп ѕčяїþţ ąпð гєťùѓñѕ ďăţã ƒѓąmз§
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



