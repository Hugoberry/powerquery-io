---
title: Text.PadStart
---

# Text.PadStart


Retorna o texto de um comprimento especificado preenchendo o início do texto especificado.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Retorna um valor <code>text</code> preenchido até o comprimento <code>count</code> inserindo espaços no início do valor de texto <code>text</code>.     Um caractere <code>character</code> opcional pode ser usado para especificar o caractere usado no preenchimento. O caractere de preenchimento padrão é um espaço.


## Examples

### Example #1 
Preencha o início de um valor de texto para que tenha 10 caracteres.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
Preencha o início de um valor de texto com &#34;|&#34; para que tenha 10 caracteres.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
