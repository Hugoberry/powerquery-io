---
title: Python.Execute
---

# Python.Execute


Σхзсüťęš Ρýţђθπ šсяĩþŧ дñδ ŗзтϋřйş ðāτą ƒѓãmëѕ


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Σхзсüťęš Ρýţђθπ šсяĩþŧ дñδ ŗзтϋřйş ðāτą ƒѓãmëѕ
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



