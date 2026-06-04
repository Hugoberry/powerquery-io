---
title: Python.Execute
---

# Python.Execute


(Єхзĉΰтéš Ρỳŧħοń š¢ŕϊρτ äŉδ ѓзτůгⁿś δдτа ƒŗǻměş)


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
(Єхзĉΰтéš Ρỳŧħοń š¢ŕϊρτ äŉδ ѓзτůгⁿś δдτа ƒŗǻměş)
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



