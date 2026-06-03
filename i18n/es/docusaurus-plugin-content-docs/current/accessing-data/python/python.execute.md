---
title: Python.Execute
---

# Python.Execute


Е×зčυтёś Þýţĥǿи ŝćřïрŧ αňď ѓєтџŗŋş đãτă ƒřáмєŝ


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Е×зčυтёś Þýţĥǿи ŝćřïрŧ αňď ѓєтџŗŋş đãτă ƒřáмєŝ
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



