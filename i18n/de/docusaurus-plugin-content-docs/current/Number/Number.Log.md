---
title: Number.Log
---

# Number.Log


## Description

Gibt den Logarithmus der Zahl zur angegebenen Basis (standardmäßig &#34;e&#34;) zurück.


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Gibt den Logarithmus einer Zahl (<code>number</code>) zur angegebenen Basis (<code>base</code>) zurück. Ohne Angabe von "<code>base</code>" wird standardmäßig "Number.E" verwendet.    Ist <code>number</code> NULL, gibt <code>Number.Log</code> NULL zurück.


## Examples

### Example #1 
Ermittelt den Logarithmus von 2 zur Basis 10.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Ermittelt den Logarithmus von 2 zur Basis &#34;e&#34;.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
