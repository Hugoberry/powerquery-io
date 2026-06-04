---
title: Python.Execute
---

# Python.Execute


Ěх℮çūťĕś РУťћοņ śċґїρт άиð řзтùґи§ đªтά ƒřǻmэş


## Syntax

```powerquery
Python.Execute(
    script as text,
    optional arguments as record
) as table
```



## Examples

### Example #1
Ěх℮çūťĕś РУťћοņ śċґїρт άиð řзтùґи§ đªтά ƒřǻmэş
```powerquery
Python.Execute("a = pandas.DataFrame(dataset[dataset.columns[0]])", [dataset=#"Source"])
```



