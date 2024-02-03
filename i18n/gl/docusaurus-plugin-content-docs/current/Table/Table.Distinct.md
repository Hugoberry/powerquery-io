---
title: Table.Distinct
---

# Table.Distinct


## Description

Elimina filas duplicadas da táboa.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Elimina as filas duplicadas da táboa.    Un parámetro opcional, <code>equationCriteria</code>, especifica que columnas da táboa se proban para a duplicación. Se <code>equationCriteria</code> non se especifica, probáranse todas as columnas.<br />    <br />    Debido a que Power Query ás veces descarga determinadas operacións nas orixes de datos do backend (coñecidas como "dobramento"), e ás veces tamén optimiza as consultas     saltando operacións que non son estritamente necesarias, en xeral, non hai garantía de que duplicado específico se conservará.    Por exemplo, non pode asumir que a primeira fila cun conxunto único de valores de columna permanecerá e eliminaranse as filas máis abaixo na táboa.    Se queres que a eliminación de duplicados se comporte de forma previsible, primeiro almacena a táboa mediante <code>Table.Buffer</code>.


## Examples

### Example #1 
Eliminar as filas duplicadas da táboa.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2 
Eliminar as filas duplicadas da columna [b] na táboa &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
