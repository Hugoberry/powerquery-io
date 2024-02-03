---
title: Text.At
---

# Text.At


## Description

Повертає символ, що знаходиться у вказаній позиції.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Повертає символ у текстовому значенні, <code>text</code>, що знаходиться в позиції <code>index</code>. Перший символ текстового значення знаходиться в позиції 0.


## Examples

### Example #1 
Знайти символ у позиції 4 в рядку &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
