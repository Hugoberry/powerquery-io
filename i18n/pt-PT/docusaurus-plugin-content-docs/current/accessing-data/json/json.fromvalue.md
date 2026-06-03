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

Produz uma representação JSON de um determinado valor `value` com uma codificação de texto especificada por `encoding`. Se `encoding` estiver omisso, é utilizado UTF8. Os valores são representados da seguinte forma:

-   Os valores nulos, de texto e lógicos são representados como os tipos JSON correspondentes
-   Os números são representados como números em JSON, com a exceção de que `#infinity`, `-#infinity` e `#nan` são convertidos em nulo
-   As listas são representadas como matrizes JSON
-   Os registos são representados como objetos JSON
-   As tabelas são representadas como matriz de objetos
-   As datas, horas, data hora, data fuso horário e durações são representadas como texto ISO-8601
-   Os valores binários são representados como texto com codificação Base 64
-   Os tipos e as funções produzem erros


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
