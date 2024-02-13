---
title: Number.ToText
---

# Number.ToText


Converte o número especificado em texto.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

Converte o valor numérico <code>number</code> num valor de texto de acordo com o formato especificado por <code>format</code>.<br />    <br />    O formato é um valor de texto que indica a forma como o número deve ser convertido. Para mais detalhes sobre os valores de formato suportados, aceda a https://go.microsoft.com/fwlink/?linkid=2241210 e https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Também pode ser fornecida um <code>culture</code> opcional (por exemplo, "en-US") para controlar o comportamento dependente da cultura de <code>format</code>.


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
Converta um número em formato exponencial.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Converta um número em formato de percentagem com apenas uma casa decimal.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
