---
title: Text.At
---

# Text.At


## Description

Возвращает символ в указанной позиции.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Возвращает символ в текстовом значении <code>text</code> в позиции <code>index</code>. Первый символ в тексте находится в позиции 0.


## Examples

### Example #1 
Найти символ в позиции 4 в строке &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
