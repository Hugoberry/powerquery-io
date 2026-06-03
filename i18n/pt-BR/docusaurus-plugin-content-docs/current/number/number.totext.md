---
title: Number.ToText
---

# Number.ToText


Converte o número fornecido em texto.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

Converte o valor numérico `number` em um valor de texto de acordo com o formato especificado por `format`.  
  
O formato é um valor de texto que indica como o número deve ser convertido. Para obter mais detalhes sobre os valores de formato com suporte, acesse https://go.microsoft.com/fwlink/?linkid=2241210 e https://go.microsoft.com/fwlink/?linkid=2240884.  
  
Um `culture` opcional também pode ser fornecido (por exemplo, "en-US") para controlar o comportamento dependente da cultura de `format`.


## Examples

### Example #1
Converta um número em texto sem especificar um formato.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2
Converter um número para o formato exponencial.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3
Converta um número em formato de porcentagem com apenas uma casa decimal.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
