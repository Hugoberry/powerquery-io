---
title: Text.Middle
---

# Text.Middle


## Description

Pateikiama nurodyto ilgio neviršijanti dalinė eilutė.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Pateikiami simboliai (<code>count</code>) arba reikšmė iki <code>text</code> pabaigos, kai poslinkis <code>start</code>.


## Examples

### Example #1 
Raskite dalinę eilutę iš teksto „Hello World“, prasidedančią nuo 6 indekso ir apimančią 5 simbolius.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Raskite dalinę eilutę iš teksto „Hello World“ nuo 6 indekso iki pabaigos.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
