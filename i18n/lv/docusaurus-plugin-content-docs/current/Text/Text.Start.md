---
title: Text.Start
---

# Text.Start


## Description

Tiek atgriezts teksta sākums.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

<code>text</code> pirmās <code>count</code> rakstzīmes tiek atgrieztas kā teksta vērtība.


## Examples

### Example #1 
Iegūstiet Hello, World pirmās 5 rakstzīmes.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
