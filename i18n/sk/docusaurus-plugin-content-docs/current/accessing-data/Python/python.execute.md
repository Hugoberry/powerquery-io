---
title: Python.Execute
---

# Python.Execute


Σ×єĉúţеŝ Ρŷťĥōп śćřïþт ăńδ řēтϋřņ§ ðąŧα ƒřªмэš


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Σ×єĉúţеŝ Ρŷťĥōп śćřïþт ăńδ řēтϋřņ§ ðąŧα ƒřªмэš
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



