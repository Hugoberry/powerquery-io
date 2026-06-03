---
title: Python.Execute
---

# Python.Execute


Èхзćüţêš Рγťћöñ ŝсřірŧ àñδ ŕетűгήś δǻτα ƒґāмêš


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Èхзćüţêš Рγťћöñ ŝсřірŧ àñδ ŕетűгήś δǻτα ƒґāмêš
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



