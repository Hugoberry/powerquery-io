---
title: Json.FromValue
---

# Json.FromValue


## Description

Produce unha representación JSON dun determinado valor.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Xera unha representación JSON para un determinado valor <code>value</code> cunha codificación de texto especificada por <code>encoding</code>. Se <code>encoding</code> se omite, úsase UTF8. Os valores represéntanse da maneira seguinte:<br /> <ul>        <li>Os valores lóxicos, de texto e nulos represéntanse como os tipos JSON correspondentes</li>        <li>Os números represéntanse como números en JSON, excepto no caso de <code>#infinity</code>, <code>-#infinity</code> e <code>#nan</code> que se converten en nulos</li>        <li>As listas represéntanse como matrices JSON</li>        <li>Os rexistros represéntanse como obxectos JSON</li>        <li>As táboas represéntanse como unha matriz de obxectos</li>        <li>As datas, horas, dataHora, datetimezones e duracións represéntanse como texto ISO-8601</li>        <li>Os valores binarios represéntanse como texto codificado en base 64</li>        <li>Os tipos e funcións xeran un erro</li> </ul>    


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
