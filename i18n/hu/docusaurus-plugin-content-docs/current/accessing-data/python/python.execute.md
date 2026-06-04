---
title: Python.Execute
---

# Python.Execute


Ëхèĉυτêѕ Рутђôή śčŗϊρт âⁿð яèţΰŗиš đāτд ƒѓåmēś


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Ëхèĉυτêѕ Рутђôή śčŗϊρт âⁿð яèţΰŗиš đāτд ƒѓåmēś
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



