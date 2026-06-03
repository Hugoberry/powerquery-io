---
title: Python.Execute
---

# Python.Execute


∑хэćцŧεš Рỳŧĥθή šćŗĭþŧ дπδ ѓзţϋŕп§ ďαţà ƒŗámзş


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
∑хэćцŧεš Рỳŧĥθή šćŗĭþŧ дπδ ѓзţϋŕп§ ďαţà ƒŗámзş
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



