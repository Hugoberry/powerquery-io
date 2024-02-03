---
title: Text.From
---

# Text.From


## Description

Көрсетілген мәннен мәтіндік мәнді жасайды.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

<code>value</code> мәтіндік көрінісін қайтарады. <code>value</code> <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> немесе <code>binary</code> мәні бола алады.    Егер көрсетілген мән null болса, <code>Text.From</code> null мәнін қайтарады. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1 
3 санынан мәтіндік мәнді жасау.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
