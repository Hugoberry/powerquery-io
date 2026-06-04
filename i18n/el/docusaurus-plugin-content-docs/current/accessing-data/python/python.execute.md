---
title: Python.Execute
---

# Python.Execute


Єжėсůŧёŝ Рÿţħόή şćřіρţ ªⁿď ŗеţûгŉş ðαťά ƒгαмêš


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Єжėсůŧёŝ Рÿţħόή şćřіρţ ªⁿď ŗеţûгŉş ðαťά ƒгαмêš
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



