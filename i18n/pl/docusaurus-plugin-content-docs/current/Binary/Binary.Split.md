---
title: Binary.Split
---

# Binary.Split


## Description

Dzieli określony plik binarny na listę plików binarnych przy użyciu określonego rozmiaru strony.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Dzieli <code>binary</code> na listę plików binarnych, gdzie pierwszym elementem listy wyjściowej jest plik binarny zawierający pierwsze<code>pageSize</code> B z     źródłowego pliku binarnego, następnym elementem listy wyjściowej jest plik binarny zawierający następne <code>pageSize</code> B ze źródłowego pliku binarnego, i tak dalej.



## Category
Binary
