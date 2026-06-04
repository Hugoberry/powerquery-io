---
title: Json.FromValue
---

# Json.FromValue


Produce unha representación JSON dun determinado valor.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Xera unha representación JSON para un determinado valor `value` cunha codificación de texto especificada por `encoding`. Se `encoding` se omite, úsase UTF8. Os valores represéntanse da maneira seguinte:

-   Os valores lóxicos, de texto e nulos represéntanse como os tipos JSON correspondentes
-   Os números represéntanse como números en JSON, excepto no caso de `#infinity`, `-#infinity` e `#nan` que se converten en nulos
-   As listas represéntanse como matrices JSON
-   Os rexistros represéntanse como obxectos JSON
-   As táboas represéntanse como unha matriz de obxectos
-   As datas, horas, dataHora, datetimezones e duracións represéntanse como texto ISO-8601
-   Os valores binarios represéntanse como texto codificado en base 64
-   Os tipos e funcións xeran un erro


## Examples

### Example #1
Converter un valor complexo a JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
