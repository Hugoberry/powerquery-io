---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Převede binární hodnotu na seznam textových hodnot rozdělených na koncích řádků. Pokud je určen styl uvozovek, mohou být znaky konců řádků uzavřeny do uvozovek. Pokud má parametr includeLineSeparators hodnotu True, jsou znaky konců řádků zahrnuty do textu.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Details

Převede binární hodnotu na seznam textových hodnot rozdělených na koncích řádků. Pokud je určen styl uvozovek, mohou být znaky konců řádků uzavřeny do uvozovek. Pokud má parametr includeLineSeparators hodnotu True, jsou znaky konců řádků zahrnuty do textu.



## Category
Lines
