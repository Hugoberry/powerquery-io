---
title: Text.PadStart
---

# Text.PadStart


Devolve texto com um comprimento especificado, preenchendo o início do texto especificado.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Devolve um valor `text` preenchido até ao comprimento `count` através da inserção de espaço no início do valor de texto `text`. É possível utilizar um caráter opcional `character` para especificar o caráter utilizado para preenchimento. O caráter de preenchimento predefinido é um espaço.


## Examples

### Example #1
Preenche o início do valor de texto de modo a que tenha 10 carateres de comprimento.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Preencher o início de um valor de texto com "|" para que tenha 10 carateres de comprimento.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
