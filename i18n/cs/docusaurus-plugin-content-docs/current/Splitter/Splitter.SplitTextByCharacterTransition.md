---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Vrátí funkci, která rozdělí text na seznam textů na základě přechodu z jednoho druhu znaků na jiný. Parametry \{0} a \{1} mohou být buď seznam znaků, nebo funkce, která přijímá znak a vrací hodnotu true nebo false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Vrátí funkci, která rozdělí text na seznam textů na základě přechodu z jednoho druhu znaků na jiný. Parametry <code>before</code> a <code>after</code> mohou být buď seznam znaků, nebo funkce, která přijímá znak a vrací hodnotu true nebo false.


## Examples

### Example #1 
Pokaždé, když za velkým nebo malým písmenem následuje číslice, rozdělte vstup.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
