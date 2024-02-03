---
title: Text.PadStart
---

# Text.PadStart


## Description

Devolve un texto dunha lonxitude especificada polo enchemento ao inicio do texto seleccionado.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Devolve un valor <code>text</code> enchido ata <code>count</code> de lonxitude ao inserir espazos ao inicio do valor de texto <code>text</code>.    O parámetro opcional <code>character</code> pódese utilizar para especificar o carácter usado para o enchemento. O carácter de enchemento predefinido é un espazo.


## Examples

### Example #1 
Encher o inicio dun valor de texto para que teña 10 caracteres de lonxitude.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
Encher o inicio dun valor de texto con &#34;|&#34; para que teña 10 caracteres de lonxitude.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
