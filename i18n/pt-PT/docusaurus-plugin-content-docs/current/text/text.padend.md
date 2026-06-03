---
title: Text.PadEnd
---

# Text.PadEnd


Devolve texto com um comprimento especificado, preenchendo o final do texto especificado.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Devolve um valor `text` preenchido até ao comprimento `count` através da inserção de espaço no final do valor de texto `text`. É possível utilizar um caráter opcional `character` para especificar o caráter utilizado para preenchimento. O caráter de preenchimento predefinido é um espaço.


## Examples

### Example #1
Preenche o final do valor de texto de modo a que tenha 10 carateres de comprimento.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2
Preencher o final de um valor de texto com "|" para que tenha 10 carateres de comprimento.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
