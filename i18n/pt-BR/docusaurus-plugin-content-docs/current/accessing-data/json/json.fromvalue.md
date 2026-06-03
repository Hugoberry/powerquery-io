---
title: Json.FromValue
---

# Json.FromValue


Produz uma representação JSON de um valor especificado.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Produz uma representação JSON do valor fornecido `value` com codificação de tempo especificada por `encoding`. Se `encoding` for omitido, UTF8 será usado. Os valores são representados da seguinte maneira:

-   Nulo, texto e valores lógicos são representados como os tipos JSON correspondentes
-   Números são representados como números em JSON, exceto `#infinity`, `-#infinity` e `#nan`, convertidos a nulo
-   Listas são representadas como matrizes JSON
-   Os registros são representados como objetos JSON
-   Tabelas são representadas como uma matriz de objetos
-   Datas, horas, datetimes, datetimezones e durações são representados como texto ISO-8601
-   Valores binários são representados como texto codificado base-64
-   Tipos e funções produzem um erro


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
