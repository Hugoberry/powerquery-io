---
title: Text.Insert
---

# Text.Insert


Көрсетілген орында бір мәтіндік мәнді екіншісіне кірістіреді.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

`offset` орнында `newText` мәтіндік мәнін `text` мәтіндік мәніне кірістірудің нәтижесін қайтарады. Бастауды 0 санына орналастырады.


## Examples

### Example #1
"ABD" ішінде "B" және "D" арасында "C" кірістіру.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
