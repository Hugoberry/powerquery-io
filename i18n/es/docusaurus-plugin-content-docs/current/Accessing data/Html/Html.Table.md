---
title: Html.Table
---

# Html.Table


## Description

Devuelve una tabla que contiene los resultados de ejecutar los selectores CSS especificados en el código HTML proporcionado.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Devuelve una tabla con los resultados de la ejecución de los selectores de CSS especificados en el <code>html</code> que se indicó. Puede proporcionarse un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los siguientes campos:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Devuelve una tabla de un valor de texto HTML de ejemplo.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Administrador</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#tabla({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Permite extraer todos los valores HREF de un valor de texto HTML de ejemplo.
```powerquery
Html.Table("<a href=""/test.html"">Prueba</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Acceso a los datos
