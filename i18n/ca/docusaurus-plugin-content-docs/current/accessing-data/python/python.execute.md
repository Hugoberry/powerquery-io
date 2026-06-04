---
title: Python.Execute
---

# Python.Execute


(Ежзсųτėŝ Ρÿŧĥőⁿ ѕĉяϊþт áňđ řěŧūгŉś ďάťǻ ƒŗāмęś)


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
(Ежзсųτėŝ Ρÿŧĥőⁿ ѕĉяϊþт áňđ řěŧūгŉś ďάťǻ ƒŗāмęś)
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



