---
title: Text.Middle
---

# Text.Middle


## Description

Returnează un subșir până la o lungime specifică.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Returnează <code>count</code> caractere sau până la sfârșitul <code>text</code>; la decalajul <code>start</code>.


## Examples

### Example #1 
Găsiți subșirul din textul „Salut lume” care începe la indexul 6 și care are lungimea de 5 caractere.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Găsiți subșirul din textul „Salut lume” care începe la indexul 6 și până la sfârșit.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
