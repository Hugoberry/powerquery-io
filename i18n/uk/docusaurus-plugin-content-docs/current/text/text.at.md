---
title: Text.At
---

# Text.At


Повертає символ, що знаходиться у вказаній позиції.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Повертає символ у текстовому значенні, `text`, що знаходиться в позиції `index`. Перший символ текстового значення знаходиться в позиції 0.


## Examples

### Example #1
Знайти символ у позиції 4 в рядку "Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
