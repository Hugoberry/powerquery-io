---
title: Json.FromValue
---

# Json.FromValue


Produz uma representação JSON de um determinado valor.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Produz uma representação JSON de um determinado valor <code>value</code> com uma codificação de texto especificada por <code>encoding</code>. Se <code>encoding</code> estiver omisso, é utilizado UTF8. Os valores são representados da seguinte forma:<br /> <ul>        <li>Os valores nulos, de texto e lógicos são representados como os tipos JSON correspondentes</li>        <li>Os números são representados como números em JSON, com a exceção de que <code>#infinity</code>, <code>-#infinity</code> e <code>#nan</code> são convertidos em nulo</li>        <li>As listas são representadas como matrizes JSON</li>        <li>Os registos são representados como objetos JSON</li>        <li>As tabelas são representadas como matriz de objetos</li>        <li>As datas, horas, datahora, datafusohorário e durações são representadas como texto ISO-8601</li>        <li>Os valores binários são representados como texto com codificação Base 64</li>        <li>Os tipos e as funções produzem erros</li> </ul>    


## Examples

### Example #1 
Converta um valor complexo para JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
