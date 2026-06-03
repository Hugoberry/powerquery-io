---
title: Logical.ToText
---

# Logical.ToText


Retourneert de tekst "true" of "false", uitgaande van een logische waarde.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Maakt een tekstwaarde van de logische waarde `logicalValue`: `waar` of `onwaar`. Als `logicalValue` geen logische waarde is, wordt er een fout gegenereerd.


## Examples

### Example #1
Een tekstwaarde van de logische `true` maken.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
