---
title: Json.FromValue
---

# Json.FromValue


## Description

Produz uma representação JSON de um valor especificado.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Produz uma representação JSON do valor fornecido <code>value</code> com codificação de tempo especificada por <code>encoding</code>. Se <code>encoding</code> for omitido, UTF8 será usado. Os valores são representados da seguinte maneira:<br /> <ul>        <li>Nulo, texto e valores lógicos são representados como os tipos JSON correspondentes</li>        <li>Números são representados como números em JSON, exceto <code>#infinity</code>, <code>-#infinity</code> e <code>#nan</code>, convertidos a nulo</li>        <li>Listas são representadas como matrizes JSON</li>        <li>Registros são representados como objetos JSON</li>        <li>Tabelas são representadas como uma matriz de objetos</li>        <li>Datas, horas, datetimes, datetimezones e durações são representadas como texto ISO-8601</li>        <li>Valores binários são representados como texto codificado base-64</li>        <li>Tipos e funções produzem um erro</li> </ul>    


## Examples

### Example #1 
Converter um valor complexo em JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
