---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Zwraca funkcję dzielącą tekst na listę wartości tekstowych w miejscach występowania przejścia z jednego rodzaju znaków na inny. Parametry \{0} i \{1} mogą być listą znaków lub funkcją przyjmującą znaki i zwracającą wartość true/false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Zwraca funkcję dzielącą tekst na listę wartości tekstowych w miejscach występowania przejścia z jednego rodzaju znaków na inny. Parametry <code>before</code> i <code>after</code> mogą być listą znaków lub funkcją przyjmującą znaki i zwracającą wartość true/false.


## Examples

### Example #1 
Podziel dane wejściowe za każdym razem, gdy po wielkiej lub małej literze następuje cyfra.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
