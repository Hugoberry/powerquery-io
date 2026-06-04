---
title: Text.Middle
---

# Text.Middle


Pateikiama nurodyto ilgio neviršijanti dalinė eilutė.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Pateikiami simboliai (`count`) arba reikšmė iki `text` pabaigos, kai poslinkis `start`.


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


### Example #3
Raskite dalinę eilutę iš teksto „Hello World“, prasidedančią nuo 0 indekso ir apimančią 2 simbolius.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
