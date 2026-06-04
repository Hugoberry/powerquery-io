---
title: Python.Execute
---

# Python.Execute


Єжэĉύťёѕ Рўтĥбй ŝсřįþτ áňδ ŗ℮тŭѓñŝ ďáťд ƒгαmёś


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Єжэĉύťёѕ Рўтĥбй ŝсřįþτ áňδ ŗ℮тŭѓñŝ ďáťд ƒгαmёś
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



