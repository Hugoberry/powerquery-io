---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Бөлгіштегі таңбалардың кез келгенінде бөлінген мәтіндік мәндер тізімін қайтарады.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

<code>separators</code> көрсетілген бөлгішіндегі кез келген таңбаға негзіделген <code>text</code> мәтіндік мәнін бөлу нәтижесінде алынған мәтіндік мәндер тізімін қайтарады.


## Examples

### Example #1 
&#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34; мәтіндік мәнінен тізімді жасау.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
