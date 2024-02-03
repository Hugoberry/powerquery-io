---
title: Text.Select
---

# Text.Select


## Description

Wybiera wszystkie wystąpienia danego znaku lub listy znaków z wejściowej wartości tekstowej.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Zwraca kopię wartości tekstowej <code>text</code>, z której zostały usunięte wszystkie znaki spoza zbioru <code>selectChars</code>.  


## Examples

### Example #1 
Wybierz w wartości tekstowej wszystkie znaki z zakresu od „a” do „z”.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
