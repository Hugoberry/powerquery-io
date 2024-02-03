---
title: Text.Range
---

# Text.Range


## Description

Pateikiama poslinkyje rasta dalinė eilutė.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Pateikiama rasta dalinė eilutė iš teksto <code>text</code>, kai poslinkis <code>offset</code>.    Norint nurodyti, kiek simbolių pateikti, galima įtraukti pasirenkamą parametrą <code>count</code>. Jei nepakanka simbolių, pateikiama klaida.


## Examples

### Example #1 
Raskite dalinę eilutę iš teksto „Hello World“, pradedant nuo indekso 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Raskite dalinę eilutę iš teksto „Hello World Hello“, pradedant nuo indekso 6, besitęsiančią 5 simbolius.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
