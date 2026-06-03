---
title: Html.Table
---

# Html.Table


Devuelve una tabla que contiene los resultados de ejecutar los selectores CSS especificados en el código HTML proporcionado.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla con los resultados de la ejecución de los selectores de CSS especificados en el `html` que se indicó. Puede proporcionarse un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener los siguientes campos:

-   `RowSelector`


## Examples

### Example #1
Devuelve una tabla de un valor de texto HTML de ejemplo.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2
Permite extraer todos los valores HREF de un valor de texto HTML de ejemplo.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accessing data
