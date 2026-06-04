---
title: Text.Middle
---

# Text.Middle


Returnează un subșir până la o lungime specifică.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Returnează `count` caractere sau până la sfârșitul `text`; la decalajul `start`.


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


### Example #3
Găsiți subșirul din textul „Bună ziua tuturor” care începe la indexul 0 și care are lungimea de 2 caractere.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
