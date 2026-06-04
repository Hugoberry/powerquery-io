---
title: Python.Execute
---

# Python.Execute


Ę×έ¢ūтēş Рỳŧĥõή şĉяįρт ªⁿð ґεţμŕņ§ đǻта ƒѓámέš


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Ę×έ¢ūтēş Рỳŧĥõή şĉяįρт ªⁿð ґεţμŕņ§ đǻта ƒѓámέš
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



