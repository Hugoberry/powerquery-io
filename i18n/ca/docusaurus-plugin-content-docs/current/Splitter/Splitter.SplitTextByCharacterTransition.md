---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Retorna una funció que divideix el text en una llista de text a partir d&#39;una transició d&#39;un tipus de caràcter a un altre. Els paràmetres \{0} i \{1} poden ser una llista de caràcters o una funció que utilitza un caràcter i retorna un valor &#34;true&#34; o &#34;false&#34;.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Retorna una funció que divideix el text en una llista de text a partir d'una transició d'un tipus de caràcter a un altre. Els paràmetres <code>before</code> i <code>after</code> poden ser una llista de caràcters o una funció que utilitza un caràcter i retorna un valor "true" o "false".


## Examples

### Example #1 
Divideix l&#39;entrada cada vegada que una lletra majúscula o minúscula va seguida d&#39;un dígit.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
