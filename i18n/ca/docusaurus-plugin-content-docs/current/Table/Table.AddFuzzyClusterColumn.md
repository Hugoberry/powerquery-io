---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

Afegeix una columna nova amb valors representatius obtinguts a partir de l&#39;agrupació difusa de valors de la columna especificada de la taula.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Details

Afegeix una columna nova <code>newColumnName</code> a <code>table</code> amb valors representatius de <code>columnName</code>. Els valors representatius s'obtenen mitjançant la creació de coincidències aproximades dels valors de <code>columnName</code> per a cada fila.    Es pot incloure un conjunt opcional de <code>options</code> per especificar com es comparen les columnes clau. Les opcions inclouen:    <ul><li><code>Culture</code> : Permet agrupar registres en funci&#243; de normes espec&#237;fiques de la refer&#232;ncia cultural. Pot ser qualsevol nom de refer&#232;ncia cultural v&#224;lid. Per exemple, una opci&#243; de refer&#232;ncia cultural &quot;ja-JP&quot; agrupa els registres segons la cultura japonesa. El valor per defecte &#233;s &quot;&quot;, que fa agrupacions basades en la refer&#232;ncia cultural invariable Angl&#232;s.</li><li><code>IgnoreCase</code> : Valor l&#242;gic (true o false) que permet l&#39;agrupaci&#243; de claus que no diferencien entre maj&#250;scules i min&#250;scules. Per exemple, si &#233;s true, &quot;Ra&#239;m&quot; s&#39;agrupa amb &quot;grapes&quot;. El valor per defecte &#233;s true.</li><li><code>IgnoreSpace</code> : Valor l&#242;gic (true o false) que permet la combinaci&#243; de parts del text per trobar grups. Per exemple, si &#233;s true, &quot;Gra pes&quot; s&#39;agrupa amb &quot;Grapes&quot;. El valor per defecte &#233;s true.</li><li><code>SimilarityColumnName</code> : Nom de la columna que mostra la similitud entre un valor d&#39;entrada i el valor representatiu de l&#39;entrada. El valor per defecte &#233;s nul i, en aquest cas, no s&#39;afegir&#224; cap columna nova per a les similituds.</li><li><code>Threshold</code> : Nombre entre 0,00 i 1,00 que especifica la puntuaci&#243; de similitud en qu&#232; s&#39;agruparan dos valors.    Per exemple, &quot;Grapes&quot; i &quot;Graes&quot; (falta la &quot;p&quot;) nom&#233;s s&#39;agrupen si aquesta opci&#243; est&#224; definida amb un valor inferior a 0,90.    Un llindar d&#39;1,00 nom&#233;s permet coincid&#232;ncies exactes.    (Tingueu en compte que una &quot;coincid&#232;ncia exacta&quot; aproximada podria ignorar difer&#232;ncies com ara l&#39;&#250;s de maj&#250;scules i min&#250;scules, l&#39;ordre de les paraules i la puntuaci&#243;.)    El valor per defecte &#233;s 0,80.</li><li><code>TransformationTable</code> : Taula que permet agrupar registres en funci&#243; de les assignacions de valors personalitzats. Hauria de contenir les columnes &quot;From&quot; i &quot;To&quot;. Per exemple, &quot;Grapes&quot; s&#39;agrupa amb &quot;Raisins&quot; si es proporciona una taula de transformaci&#243; amb una columna &quot;From&quot; que cont&#233; &quot;Grapes&quot; i una columna &quot;To&quot; que cont&#233; &quot;Raisins&quot;. Tingueu en compte que la transformaci&#243; s&#39;aplicar&#224; a totes les aparicions del text a la taula de transformaci&#243;. Amb la taula de transformaci&#243; anterior, &quot;Grapes are sweet&quot; tamb&#233; s&#39;agrupar&#224; amb &quot;Raisins are sweet&quot;.</li></ul><br />    


## Examples

### Example #1 
Cerqueu els valors representatius de la ubicació dels empleats.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
