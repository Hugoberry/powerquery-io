---
title: Number.ToText
---

# Number.ToText


## Description

Converte o número dado en texto.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Converte o valor numérico <code>number</code> a un valor de texto en función do formato especificado por <code>format</code>.<br />    <br />    O formato é un valor de texto que indica como debe converterse o número. Para obter máis información sobre os valores de formato compatibles, vaia a https://go.microsoft.com/fwlink/?linkid=2241210 e https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Tamén se pode fornecer un <code>culture</code> opcional (por exemplo, "en-US") para controlar o comportamento dependente da referencia cultural de <code>format</code>.


## Examples

### Example #1 
Converter un número a texto sen especificar un formato.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Converter un número en formato exponencial.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Converter un número en formato porcentual cun só decimal.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
